import { DB } from '@/utils/firebase'
import {
  encrypt,
  generateQuoteRequestEmailTemplate,
  validateData,
} from '@/utils/helpers'
import { addDoc, collection } from 'firebase/firestore'
import { cloneDeep } from 'lodash'
import { NextResponse } from 'next/server'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const window = new JSDOM('').window
const DOMPurify = createDOMPurify(window)

const fieldsToEncrypt = ['fullName', 'email', 'phoneNumber', 'postcode']

export async function POST(request: Request) {
  const apiKey = request.headers.get('Authorization')?.split('Bearer ')[1]
  const validApiKey = process.env.API_KEY

  if (!apiKey || apiKey !== validApiKey) {
    return new Response('Unauthorized', { status: 401 })
  }

  const requestData = await request.json()
  const validData = validateData(requestData)

  if (validData) {
    try {
      const formDataClone = cloneDeep(validData)
      const sanitizedData = Object.fromEntries(
        Object.entries(formDataClone).map(([key, value]) => {
          if (typeof value !== 'boolean') {
            return [
              key,
              value
                ? DOMPurify.sanitize(value, {
                    FORBID_TAGS: ['a'],
                    KEEP_CONTENT: false,
                  })
                : '',
            ]
          } else {
            return [key, value ?? '']
          }
        })
      )
      const processedData = Object.fromEntries(
        Object.entries(sanitizedData).map(([key, value]) => {
          if (typeof value !== 'boolean' && fieldsToEncrypt.includes(key)) {
            const encryptedValue = encrypt(String(value))
            return [key, encryptedValue]
          } else {
            return [key, value]
          }
        })
      )

      const docRef = await addDoc(collection(DB, 'requests'), {
        ...processedData,
        status: 'awaitingQuote',
        submittedAt: new Date(),
        isFromWebsite: true,
      })

      if (docRef.id) {
        // Using original formData for the email content
        if (docRef.id) {
          const messageContent = generateQuoteRequestEmailTemplate(
            docRef.id,
            sanitizedData
          )

          addDoc(collection(DB, 'mail'), {
            to: ['admin@brighterteam.co.uk'],
            message: {
              subject: 'Cleaning Quote Requested',
              html: messageContent,
            },
          })
        }
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        })
      } else {
        return new Response(null, {
          status: 500,
        })
      }
    } catch (error) {
      return new Response(null, {
        status: 500,
      })
    }
  } else {
    return NextResponse.redirect(new URL('/get-a-quote', request.url))
  }
}
