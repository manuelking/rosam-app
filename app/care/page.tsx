import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col mx-auto pb-24 md:px-24 xxs:px-14 px-6 w-full">
      <div className="flex justify-center items-center py-10">
        <h1 className="xl:text-[54px] sd:text-[34px] text-[24px] text-cobalt font-bold">
          Care services
        </h1>
      </div>
      {/* service cards */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
        {/* card 1 */}
        <div className="flex justify-center">
          <div className="flex flex-col bg-sun max-w-[700px] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/rsc-img3.jpg"
              alt="Nurse"
              width={500}
              height={500}
              className="w-full"
            />
            <div className="flex flex-col justify-center items-center text-cobalt xxs:p-10 p-6 space-y-6">
              <h1 className="font-bold xx:text-[34px] text-[28px]">
                Personal Care
              </h1>
              <p>
                We understand that certain tasks, such as bathing, dressing, and
                grooming, can become challenging due to various circumstances.
                Our caregivers are trained to provide respectful and sensitive
                assistance, making these activities more manageable for you.
              </p>
              <Link href="/care/personal-care">
                <button className="bg-white rounded-2xl py-2 px-6 text-cobalt font-semibold">
                  Find out more...
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex justify-center">
          <div className="flex flex-col bg-sun max-w-[700px] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/rsc-img3.jpg"
              alt="Nurse"
              width={500}
              height={500}
              className="w-full"
            />
            <div className="flex flex-col justify-center items-center text-cobalt xxs:p-10 p-6 space-y-6">
              <h1 className="font-bold xx:text-[34px] text-[28px]">
                Home Help
              </h1>
              <p>
                Our caregivers are trained to provide light housekeeping,
                ensuring that your living space remains clean, tidy, and
                comfortable. From dusting and vacuuming to organizing wardrobes
                and cupboards, we take care of the little details that make a
                big difference in maintaining a welcoming home environment.
              </p>
              <Link href="/care/home-help">
                <button className="bg-white rounded-2xl py-2 px-6 text-cobalt font-semibold">
                  Find out more...
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="flex justify-center">
          <div className="flex flex-col bg-sun max-w-[700px] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/rsc-img3.jpg"
              alt="Nurse"
              width={500}
              height={500}
              className="w-full"
            />
            <div className="flex flex-col justify-center items-center text-cobalt xxs:p-10 p-6 space-y-6">
              <h1 className="font-bold xx:text-[34px] text-[28px]">
                Companionship
              </h1>
              <p>
                Whether it's accompanying you to appointments or helping with
                clothing selection, our compassionate caregivers are there to
                provide support and assistance. We also encourage and
                participate in hobbies, crafts, and reading activities,
                promoting mental awareness and personal fulfillment.
              </p>
              <Link href="/care/companionship">
                <button className="bg-white rounded-2xl py-2 px-6 text-cobalt font-semibold">
                  Find out more...
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
