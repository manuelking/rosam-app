'use client'
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, Path } from 'react-hook-form'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { DB } from '@/utils/firebase'
import Link from 'next/link'
import { generateQuoteRequestEmailTemplate } from '@/utils/helpers'
import DOMPurify from 'dompurify'

type Inputs = {
  fullName: string
  email: string
  phoneNumber: string
  postcode: string
  cleaningType: string
  serviceLevel: string
  rooms: string
  bathrooms: number
  kitchens: number
  ovenCleaning: boolean
  additionalInfo: string
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  field: Path<Inputs>
  placeholder?: string
  config?: any
  error?: string
}

interface FormErrors {
  consent: string | null
  valid: string | null
}

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [requestId, setRequestId] = useState<string | null>(null)
  const [consentGiven, setConsentGiven] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
    clearErrors,
  } = useForm<Inputs>({
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => handleFormSubmit(data)

  useEffect(() => {
    localStorage.setItem('requestId', '')
  }, [])

  useEffect(() => {
    if (requestId) {
      reset()
      setIsLoading(false)
      setRequestId(null)
    }
  }, [requestId])

  const handleFormSubmit = async (formData: Inputs) => {
    setIsLoading(true)
    if (isValid) {
      try {
        const sanitizedData = Object.fromEntries(
          Object.entries(formData as Record<string, unknown>).map(
            ([key, value]) => {
              if (typeof value === 'string') {
                return [key, value ? DOMPurify.sanitize(value) : '']
              }
              return [key, value ?? '']
            }
          )
        )

        const docRef = await addDoc(collection(DB, 'requests'), {
          ...sanitizedData,
          status: 'awaitingQuote',
          submittedAt: new Date(),
          isFromWebsite: true,
        })

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

        setIsSubmitted(true)
        setFormError(null)
        clearErrors()
        // localStorage.setItem('requestId', docRef.id)
        // setRequestId(docRef.id)
        router.push('/thank-you')
      } catch (err: any) {
        setFormError(
          'Unable to submit your request at this time. Try again later.'
        )
        console.error('Error uploading form data:', err)
      } finally {
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
      setFormError('Please complete all required fields.')
    }
  }

  function Input({
    label,
    field,
    placeholder = `Enter your ${label.toLowerCase()}`,
    config,
    error,
    ...rest
  }: InputProps) {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={field} className="text-black font-light">
          {label}
          <span className="text-red-500">{config?.required && '*'}</span>
        </label>
        <input
          id={field}
          {...register(field, config)}
          placeholder={placeholder}
          className={`font-light border p-2 rounded-sm ${
            error ? 'border-red-500' : 'border-gray-300'
          } focus:border-cobalt focus:outline-none`}
          {...rest}
        />
        {error && (
          <span className="text-red-500 text-sm font-light">{error}</span>
        )}
      </div>
    )
  }

  function CheckboxInput({
    label,
    field,
    error,
    config,
  }: {
    label: string
    field: Path<Inputs>
    error?: string
    config?: object
  }) {
    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={field}
          {...register(field, config)}
          className="h-5 w-5 text-cobalt border rounded"
        />
        <label htmlFor={field} className="text-black font-light">
          {label}
        </label>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    )
  }

  return (
    <main className="flex flex-col mx-auto w-full md:px-24 xxs:px-14 px-6 py-8">
      <div className="flex flex-col lg:flex-row items-start justify-between w-full bg-white gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="xl:text-4xl text-2xl font-semibold text-cobalt">
            Get a quote
          </h1>
          <p className="text-sm lg:text-base text-black font-light max-w-prose">
            At Brighter Team, we specialise in providing premium, tailored
            cleaning services to meet your specific needs. Whether you need a
            one-time deep clean, a move-out service, or regular upkeep, our
            experienced and professional cleaning team is ready to make your
            space shine.
          </p>

          <p className="text-sm lg:text-base text-black font-light max-w-prose">
            Ready for a spotless clean? Fill out the form, and we will get back
            to you.
          </p>
          <div>
            <Link href="/#services">
              <button className="w-48 h-12 bg-sun rounded-e-2xl shadow-xl text-cobalt hover:brightness-90 font-semibold">
                Our services
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full flex-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Input
                label="Full name"
                field="fullName"
                config={{ required: 'Please fill out this field.' }}
                error={errors.fullName?.message}
              />
              <Input
                label="Email"
                field="email"
                config={{
                  required: 'Please fill out this field.',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Enter a valid email',
                  },
                }}
                error={errors.email?.message}
              />
              <Input
                label="Phone number"
                field="phoneNumber"
                config={{
                  required: 'Please fill out this field.',
                }}
                error={errors.phoneNumber?.message}
              />
              <Input
                label="Postcode"
                field="postcode"
                placeholder="Enter the cleaning location postcode"
                config={{
                  required: 'Please fill out this field.',
                  pattern: {
                    value: /^[A-Z]{1,2}[0-9R][0-9A-Z]?[ ]?[0-9][A-Z]{2}$/i,
                    message: 'Please enter a valid UK postcode.',
                  },
                }}
                error={errors.postcode?.message}
              />
              <div className="flex flex-col gap-1">
                <label className="text-black font-light">
                  Type of cleaning<span className="text-red-500">*</span>
                </label>
                <select
                  {...register('cleaningType', { required: true })}
                  name="cleaningType"
                  className="border border-slate-200 rounded-sm p-2 text-black font-light focus:border-cobalt focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select cleaning type
                  </option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
                {errors.cleaningType && (
                  <span className="text-red-500 text-sm font-light">
                    Please select an option.
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-black font-light">Service level</label>
                <select
                  {...register('serviceLevel', { required: true })}
                  name="serviceLevel"
                  className="border border-slate-200 rounded-sm p-2 text-black font-light focus:border-cobalt focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select service level
                  </option>
                  <option value="standard">Standard</option>
                  <option value="seep">Deep</option>
                  <option value="end of tenancy">End of tenancy</option>
                </select>
                {errors.serviceLevel && (
                  <span className="text-red-500 text-sm font-light">
                    Please select an option.
                  </span>
                )}
              </div>
              <Input
                label="Number of rooms"
                field="rooms"
                type="number"
                placeholder="Enter the number rooms"
                config={{
                  required: 'Please fill out this field.',
                }}
                error={errors.rooms?.message}
              />
              <Input
                label="Number of bathrooms"
                field="bathrooms"
                type="number"
                config={{
                  required: 'Please fill out this field.',
                }}
                error={errors.bathrooms?.message}
              />
              <Input
                label="Number of kitchens"
                field="kitchens"
                type="number"
                config={{
                  required: 'Please fill out this field.',
                }}
                error={errors.kitchens?.message}
              />
            </div>

            <div className="pt-4">
              <CheckboxInput
                label="Oven cleaning"
                field="ovenCleaning"
                config={{ required: false }}
                error={errors.ovenCleaning?.message}
              />
            </div>

            <div className="flex flex-col gap-1 pt-4">
              <label htmlFor="additionalInfo" className="text-black font-light">
                Additional information
              </label>
              <textarea
                id="additionalNotes"
                {...register('additionalInfo', { required: false })}
                placeholder="Enter any additional details or instructions"
                className="border border-gray-300 rounded-sm p-2 text-black font-light focus:border-cobalt focus:outline-none"
                rows={4}
              />
              {errors.additionalInfo && (
                <span className="text-red-500 text-sm font-light">
                  {errors.additionalInfo.message}
                </span>
              )}
            </div>

            {/* <div className="flex flex-col gap-1 pt-4">
              <div className="flex items-start gap-2">
                <input
                  id="dataUsageConsent"
                  type="checkbox"
                  {...register('dataUsageConsent', {
                    required: 'You must agree to the terms to proceed',
                  })}
                  className="h-5 w-5 text-cobalt focus:ring-cobalt border-gray-300 rounded"
                />
                <p className="text-black text-sm font-light">
                  I consent to providing my personal information for the purpose
                  of receiving a cleaning service quote and related
                  communications. I understand that my data will be used to
                  contact me regarding the requested services and securely
                  stored in compliance with applicable data protection laws.
                </p>
              </div>
              {errors.dataUsageConsent && (
                <span className="text-red-500 text-sm font-light">
                  {errors.dataUsageConsent.message}
                </span>
              )}
            </div> */}

            {Object.keys(errors).length > 0 && (
              <div className="text-red-500 text-sm font-light my-8">
                Please complete all required fields.
              </div>
            )}
            {formError && (
              <div className="text-red-500 text-sm font-light my-8">
                {formError}
              </div>
            )}

            <div className="flex justify-end pt-4">
              {!isSubmitted && (
                <button
                  type="submit"
                  className={`${
                    isLoading || !isValid ? 'bg-slate-400' : 'bg-cobalt'
                  } text-white py-2 px-4 rounded-2xl shadow-md hover:bg-cobalt-dark font-semibold`}
                  disabled={!isValid || isSubmitted || isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
