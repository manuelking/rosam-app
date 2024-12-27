'use client'
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, Path, UseFormRegister } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import DOMPurify from 'dompurify'

interface Inputs {
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
  dataConsentGiven: boolean
}

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [requestId, setRequestId] = useState<string | null>(null)
  const [formError, setFormError] = useState<string | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    clearErrors,
    watch,
    resetField,
  } = useForm<Inputs>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => submitForm(data)

  const cleaningType = watch('cleaningType')

  useEffect(() => {
    if (cleaningType) {
      resetField('serviceLevel')
    }
  }, [cleaningType])

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

  async function submitForm(formData: Inputs) {
    setIsLoading(true)
    if (isValid) {
      try {
        const sanitizedData = Object.fromEntries(
          Object.entries(formData).map(([key, value]) => {
            if (typeof value !== 'boolean') {
              return [key, value ? DOMPurify.sanitize(value) : '']
            }
            return [key, value ?? '']
          })
        )
        const response = await fetch('/api/quoteRequestsProxy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sanitizedData),
        })

        if (response.ok) {
          setIsSubmitted(true)
          setFormError(null)
          clearErrors()
          router.push('/thank-you')
        } else {
          setFormError('Failed to submit the request. Please try again later.')
          setIsLoading(false)
        }
      } catch (error) {
        setFormError(
          'Unable to submit your request at this time. Try again later.'
        )
      } finally {
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
      setFormError('Please complete all required fields.')
    }
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
                register={register}
                label="Full name"
                field="fullName"
                config={{ required: 'Please fill out this field.' }}
                error={errors.fullName?.message}
              />
              <Input
                register={register}
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
                register={register}
                label="Phone number"
                field="phoneNumber"
                config={{
                  required: 'Please fill out this field.',
                  pattern: {
                    value: /^(?:\+44|0)7\d{9}$/,
                    message: 'Enter a valid UK phone number',
                  },
                }}
                error={errors.phoneNumber?.message}
              />
              <Input
                register={register}
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
                <label
                  className={`${
                    !cleaningType ? 'text-gray-500' : 'text-black'
                  } font-light`}
                >
                  Service level<span className="text-red-500">*</span>
                </label>
                <select
                  {...register('serviceLevel', { required: true })}
                  name="serviceLevel"
                  disabled={!cleaningType}
                  className="border border-slate-200 rounded-sm p-2 text-black font-light focus:border-cobalt focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select service level
                  </option>
                  {cleaningType === 'residential' ? (
                    <>
                      <option value="end-of-tenancy">End of Tenancy</option>
                      <option value="move-in">Move In</option>
                    </>
                  ) : (
                    <>
                      <option value="standard">Standard</option>
                      <option value="deep">Deep</option>
                    </>
                  )}
                </select>
                {!cleaningType && (
                  <span className="text-sm text-gray-500 font-light">
                    Choose a cleaning type to see service level options.
                  </span>
                )}
                {errors.serviceLevel && (
                  <span className="text-red-500 text-sm font-light">
                    Please select an option.
                  </span>
                )}
              </div>
              <Input
                register={register}
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
                register={register}
                label="Number of bathrooms"
                field="bathrooms"
                type="number"
                config={{
                  required: 'Please fill out this field.',
                }}
                error={errors.bathrooms?.message}
              />
              <Input
                register={register}
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
                register={register}
                label="Oven cleaning"
                field="ovenCleaning"
                defaultChecked={false}
                error={errors.ovenCleaning?.message}
              />
            </div>

            <div className="flex flex-col gap-1 pt-4">
              <label htmlFor="additionalInfo" className="text-black font-light">
                Additional information
              </label>
              <textarea
                id="additionalNotes"
                {...register('additionalInfo')}
                defaultValue={''}
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

            <div className="flex flex-col gap-1 pt-4">
              <div className="flex items-start gap-2">
                <input
                  id="dataConsentGiven"
                  type="checkbox"
                  {...register('dataConsentGiven', {
                    required: 'You must agree to the terms to proceed',
                  })}
                  className="h-5 w-5 text-cobalt focus:ring-cobalt border-gray-300 rounded"
                />
                <p className="text-black text-sm font-light">
                  By checking this box, you consent to the collection and use of
                  the personal data provided in this form for the purpose of
                  receiving a cleaning quote and further communication regarding
                  the cleaning service.
                </p>
              </div>
              {errors.dataConsentGiven && (
                <span className="text-red-500 text-sm font-light">
                  {errors.dataConsentGiven.message}
                </span>
              )}
            </div>

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

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<Inputs>
  label: string
  field: Path<Inputs>
  placeholder?: string
  config?: any
  error?: string
}

function Input({
  register,
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

function CheckboxInput({ register, label, field, error, config }: InputProps) {
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
