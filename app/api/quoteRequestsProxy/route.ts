import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import { validateData } from '@/utils/helpers'

const window = new JSDOM('').window
const DOMPurify = createDOMPurify(window)

export async function POST(request: Request) {
  const API_KEY = process.env.API_KEY
  if (!API_KEY) {
    return new Response('Server error: API key not configured', {
      status: 500,
    })
  }

  try {
    const formData = await request.json()
    const validData = validateData(formData)

    if (!validData) {
      return new Response(null, {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const sanitizedData = Object.fromEntries(
      Object.entries(validData).map(([key, value]) => {
        if (typeof value === 'string') {
          return [key, value ? DOMPurify.sanitize(value) : '']
        }
        return [key, value]
      })
    )

    const URL = process.env.API_QUOTE_REQUEST_URL
    const response = await fetch(URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      body: JSON.stringify(sanitizedData),
    })

    if (!response.ok) {
      return new Response('External API error', {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(null, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response('Server error', {
      status: 500,
    })
  }
}

// import rateLimit from 'next-rate-limit'

// const limiter = rateLimit({
//   interval: 60 * 1000, // 1 minute
//   uniqueTokenPerInterval: 500, // Max 500 unique IPs per minute
// })

// export async function POST(request: Request) {

//   try {
//     // Rate limiting
//     await limiter.check(request, 10, 'API_KEY')

//     // Parse and validate request data
//     const formData = await request.json()
//     const validation = formDataSchema.safeParse(formData)

// if (!validation.success) {
//   return new Response(JSON.stringify(validation.error.format()), {
//     status: 400,
//     headers: { 'Content-Type': 'application/json' },
//   })
// }

//     // Sanitize data
// const sanitizedData = Object.fromEntries(
//   Object.entries(validation.data).map(([key, value]) => {
//     if (typeof value === 'string') {
//       return [key, DOMPurify.sanitize(value)]
//     }
//     return [key, value]
//   })
// )

//     // Forward to external API
//     const externalResponse = await fetch('https://external-api-url/quoteRequests', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${API_KEY}`,
//       },
//       body: JSON.stringify(sanitizedData),
//     })

// const externalData = await externalResponse.json()

// if (!externalResponse.ok) {
//   return new Response(JSON.stringify({ error: externalData.message || 'External API error' }), {
//     status: externalResponse.status,
//     headers: { 'Content-Type': 'application/json' },
//   })
// }

// return new Response(JSON.stringify(externalData), {
//   status: 200,
//   headers: { 'Content-Type': 'application/json' },
// })
//   } catch (error) {
// console.error('Error:', error)
// return new Response('Server error', {
//   status: 500,
// })
//   }
// }
