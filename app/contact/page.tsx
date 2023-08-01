'use client'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

type Inputs = {
  fullname: string
  company_name: string
  email: string
  postcode: string
}

function Page() {
  const [isSent, setIsSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useRef<HTMLFormElement | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true)

      if (form.current) {
        const result = await emailjs.sendForm(
          process.env.serviceId!,
          process.env.templateId!,
          form.current,
          process.env.publicKey!
        )

        console.log(result.text)
      }
    } catch (error) {
      console.log((error as EmailJSResponseStatus).text)
    } finally {
      setIsLoading(false)
      setIsSent(true)
      reset()
    }
  }

  return (
    <div className="flex flex-col mx-auto pb-24 md:px-24 xxs:px-14 px-6 w-full">
      {isSent ? (
        <div>
          <div className="flex justify-center items-center py-10">
            <h1 className="xl:text-[74px] sd:text-[54px] text-[44px] text-cobalt font-bold">
              Message sent successfully!
            </h1>
          </div>
          <div>
            <p>A member of the team will contact you.</p>
            <button onClick={() => setIsSent(false)}>
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center py-10">
            <h1 className="xl:text-[74px] sd:text-[54px] text-[44px] text-cobalt font-bold">
              Get in touch
            </h1>
          </div>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 max-w-2xl mx-auto w-full"
          >
            <input
              type="text"
              className="
              mt-0
              block
              w-full
              py-2
              px-3
              border-[1px] rounded-md bg-neutral-200
              focus:ring-0 focus:border-white text-neutral-600
            "
              placeholder="Full Name"
              {...register('fullname', { required: true })}
              name="fullname"
            />
            {errors.fullname && (
              <span className="text-[14px] animate-pulse text-red-900">
                This field is required
              </span>
            )}
            <input
              type="text"
              className="
              mt-0
              block
              w-full
              py-2
              px-3
              border-[1px] rounded-md bg-neutral-200
              focus:ring-0 focus:border-white text-neutral-600
            "
              placeholder="Company Name"
              {...register('company_name', { required: true })}
              name="company_name"
            />
            {errors.company_name && (
              <span className="text-[14px] animate-pulse text-red-900">
                This field is required
              </span>
            )}
            <input
              type="email"
              className="
              mt-0
              block
              w-full
              py-2
              px-3
              border-[1px] rounded-md bg-neutral-200
              focus:ring-0 focus:border-white text-neutral-600
            "
              placeholder="John@example.com"
              {...register('email', { required: true })}
              name="email"
            />
            {errors.email && (
              <span className="text-[14px] animate-pulse text-red-900">
                This field is required
              </span>
            )}

            <input
              type="text"
              className="
              mt-0
              block
              w-full
              py-2
              px-3
              border-[1px] rounded-md bg-neutral-200
              focus:ring-0 focus:border-white text-neutral-600
            "
              placeholder="Postcode"
              {...register('postcode', { required: true })}
              name="postcode"
            />
            {errors.postcode && (
              <span className="text-[14px] animate-pulse text-red-900">
                This field is required
              </span>
            )}
            {isLoading ? (
              <div className="">
                <div className="flex flex-row items-center text-[34px] gap-x-4">
                  <Image
                    src="/loader.svg"
                    alt="loader"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center mt-8">
                <button
                  type="submit"
                  className="rounded-lg drop-shadow-md bg-sun font-bold text-cobalt p-2 w-[200px]"
                >
                  Send
                </button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  )
}

export default Page
