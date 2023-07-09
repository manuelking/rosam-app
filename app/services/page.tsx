import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col mx-auto pb-24 px-24 w-full">
      <div className="flex justify-center items-center py-10">
        <h1 className="text-[74px] text-ampurple font-bold">Services</h1>
      </div>
      {/* service cards */}
      <div className="grid grid-cols-2 gap-10">
        {/* card 1 */}

        <div className="flex flex-col bg-ampurple max-w-[700px] overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/rsc-img3.jpg"
            alt="Nurse"
            width={500}
            height={500}
            className="w-full"
          />
          <div className="flex flex-col justify-center items-center text-white p-10 space-y-6">
            <h1 className="font-bold text-[34px]">Personal Care</h1>
            <p>
              We understand that certain tasks, such as bathing, dressing, and
              grooming, can become challenging due to various circumstances. Our
              caregivers are trained to provide respectful and sensitive
              assistance, making these activities more manageable for you.
            </p>
            <Link href="/services/personal-care">
              <button className="bg-white rounded-2xl py-2 px-6 text-ampurple font-semibold">
                Find out more...
              </button>
            </Link>
          </div>
        </div>
        {/* card 2 */}

        <div className="flex flex-col bg-ampurple max-w-[700px] overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/rsc-img3.jpg"
            alt="Nurse"
            width={500}
            height={500}
            className="w-full"
          />
          <div className="flex flex-col justify-center items-center text-white p-10 space-y-6">
            <h1 className="font-bold text-[34px]">Home Help</h1>
            <p>
              Our caregivers are trained to provide light housekeeping, ensuring
              that your living space remains clean, tidy, and comfortable. From
              dusting and vacuuming to organizing wardrobes and cupboards, we
              take care of the little details that make a big difference in
              maintaining a welcoming home environment.
            </p>
            <Link href="/services/home-help">
              <button className="bg-white rounded-2xl py-2 px-6 text-ampurple font-semibold">
                Find out more...
              </button>
            </Link>
          </div>
        </div>
        {/* card 3 */}

        <div className="flex flex-col bg-ampurple max-w-[700px] overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/rsc-img3.jpg"
            alt="Nurse"
            width={500}
            height={500}
            className="w-full"
          />
          <div className="flex flex-col justify-center items-center text-white p-10 space-y-6">
            <h1 className="font-bold text-[34px]">Companionship</h1>
            <p>
              Whether it's accompanying you to appointments or helping with
              clothing selection, our compassionate caregivers are there to
              provide support and assistance. We also encourage and participate
              in hobbies, crafts, and reading activities, promoting mental
              awareness and personal fulfillment.
            </p>
            <Link href="/services/companionship">
              <button className="bg-white rounded-2xl py-2 px-6 text-ampurple font-semibold">
                Find out more...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
