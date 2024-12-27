import { randomBytes, createCipheriv } from 'crypto'
import { z } from 'zod'

const algorithm = 'aes-256-ctr'
const secretKey = Buffer.from(String(process.env.SECRET_KEY), 'hex')

export const encrypt = (text: string) => {
  const iv = randomBytes(16)
  const cipher = createCipheriv(algorithm, secretKey, iv)
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex'),
  }
}

export function generateQuoteRequestEmailTemplate(
  id: string,
  sanitizedData: any
) {
  const messageContent = `
              <p>A new cleaning quote request has been submitted! Here are the details:</p>
              <ul>
                <li><strong>Full Name:</strong> ${
                  sanitizedData.fullName || 'N/A'
                }</li>
                <li><strong>Email:</strong> ${
                  sanitizedData.email || 'No Email'
                }</li>
                <li><strong>Phone Number:</strong> ${
                  sanitizedData.phoneNumber || 'No Phone Number'
                }</li>
                <li><strong>Postcode:</strong> ${
                  sanitizedData.postcode || 'No Postcode'
                }</li>
                <li><strong>Type of Cleaning:</strong> ${
                  sanitizedData.cleaningType || 'Not Specified'
                }</li>
                <li><strong>Service Level:</strong> ${
                  sanitizedData.serviceLevel || 'Standard'
                }</li>
                <li><strong>Rooms:</strong> ${
                  sanitizedData.rooms || 'Not Provided'
                }</li>
                <li><strong>Bathrooms:</strong> ${
                  sanitizedData.bathrooms || 0
                }</li>
                <li><strong>Kitchens:</strong> ${
                  sanitizedData.kitchens || 0
                }</li>
                <li><strong>Oven Cleaning:</strong> ${
                  sanitizedData.ovenCleaning ? 'Yes' : 'No'
                }</li>
              </ul>
              <p><strong>Additional Information:</strong> ${
                sanitizedData.additionalInfo || 'No Additional Info'
              }</p>
              <p>Your request has been received and is currently marked as ${
                sanitizedData.status || 'awaitingQuote'
              }. We will get back to you shortly.</p>
              <p><a href="https://bt-admin-flame.vercel.app/requests/show/${id}"><strong>View Request</strong></a></p>
            `
  return messageContent
}

export const inputDataSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .max(100, 'Full name must be less than 100 characters'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().regex(/^(?:\+44|0)7\d{9}$/, 'Invalid phone number'),
  postcode: z
    .string()
    .regex(/^[A-Z]{1,2}[0-9R][0-9A-Z]?[ ]?[0-9][A-Z]{2}$/i, 'Invalid postcode'),
  cleaningType: z.string().min(1, 'Cleaning type is required'),
  serviceLevel: z.string().min(1, 'Service level is required'),
  rooms: z.preprocess((value) => {
    if (typeof value === 'number') {
      return String(value)
    }
    return value
  }, z.string().max(2).regex(/^\d+$/, 'Rooms must contain only numeric characters')),
  bathrooms: z.preprocess((value) => {
    if (typeof value === 'number') {
      return String(value)
    }
    return value
  }, z.string().max(2).regex(/^\d+$/, 'Bathrooms must contain only numeric characters')),
  kitchens: z.preprocess((value) => {
    if (typeof value === 'number') {
      return String(value)
    }
    return value
  }, z.string().max(2).regex(/^\d+$/, 'Kitchens must contain only numeric characters')),
  ovenCleaning: z.boolean().optional(),
  additionalInfo: z.string().optional(),
  dataConsentGiven: z
    .boolean()
    .refine((value) => value === true, 'Data consent must be given'),
})

type InputData = z.infer<typeof inputDataSchema>
export const validateData = (data: InputData) => {
  const result = inputDataSchema.safeParse(data)

  if (!result.success) {
    return null
  }

  return result.data
}
