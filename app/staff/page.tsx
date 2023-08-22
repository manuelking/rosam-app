import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col mx-auto md:px-24 xxs:px-14 px-6 pb-24 w-full">
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="xl:text-[54px] sd:text-[34px] text-[24px] text-cobalt font-bold">
          Find the right staff
        </h1>
      </div>

      {/* staff cards */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {/* card 1 */}
        <div className="flex justify-center">
          <div className="flex flex-col bg-white max-w-[600px] overflow-hidden">
            <Image
              src="/cleanstaff4.jpg"
              alt="Caregiver"
              width={300}
              height={300}
              priority
              className="w-full"
            />
            <div className="flex flex-col justify-center items-center text-cobalt xxs:p-10 p-6 space-y-6">
              <h1 className="font-bold xx:text-[34px] text-[28px]">Cleaning</h1>
              <p>
                We understand that certain tasks, such as bathing, dressing, and
                grooming, can become challenging due to various circumstances.
                Our caregivers are trained to provide respectful and sensitive
                assistance, making these activities more manageable for you.
              </p>
              <Link href="/cleaning">
                <button className="bg-sun rounded-2xl py-2 px-6 text-cobalt font-semibold hover:bg-cobalt hover:text-sun">
                  Find out more...
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex justify-center">
          <div className="flex flex-col bg-white max-w-[600px] overflow-hidden ">
            <Image
              src="/rsc-img1.jpg"
              alt="Nurse"
              width={500}
              height={500}
              className="w-full"
            />
            <div className="flex flex-col justify-center items-center text-cobalt xxs:p-10 p-6 space-y-6">
              <h1 className="font-bold xx:text-[34px] text-[28px]">Care</h1>
              <p>
                Our caregivers are trained to provide light housekeeping,
                ensuring that your living space remains clean, tidy, and
                comfortable. From dusting and vacuuming to organizing wardrobes
                and cupboards, we take care of the little details that make a
                big difference in maintaining a welcoming home environment.
              </p>
              <Link href="/care">
                <button className="bg-sun rounded-2xl py-2 px-6 text-cobalt font-semibold hover:bg-cobalt hover:text-sun">
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
