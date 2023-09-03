import Service from '@/components/Service'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Commercial Cleaning Services in Leeds, West Yorksire | Brighter Team',
  description:
    "Elevate your business's cleanliness with our trusted commercial cleaning services in Leeds. Our expert team delivers spotless results for offices and businesses in West Yorkshire. Contact us for a sparkling workplace today!",
}

function page() {
  return (
    <div className="flex flex-col justify-center md:px-24 xxs:px-14 px-6 pb-24">
      {/* banner */}

      <div className="flex lg:flex-row flex-col justify-between pb-24 gap-x-6 lg:gap-y-0 gap-y-8 lg:pt-0 pt-6">
        <div className="flex-1 flex flex-col justify-center gap-y-6">
          <h1 className="text-cobalt font-bold sd:text-[60px] xxs:text-[54px] text-[44px]">
            Commercial Cleaning Leeds
          </h1>
          <p className="font-light text-gray-500">
            Elevate your workspace with our top-tier commercial cleaning
            service. Our professional team ensures a pristine and inviting
            environment that leaves a lasting impression on clients and
            employees alike. From offices to retail spaces, we create a polished
            atmosphere that enhances productivity and success. Experience the
            difference of a truly clean business space.
          </p>
          <Link
            href="https://contact.brighterteam.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[200px] h-[50px] bg-sun rounded-full shadow-lg text-cobalt font-semibold text-[20px]">
              Get a quote
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/cleanstaff4.jpg"
            alt="Caregiver"
            width={500}
            height={500}
            priority
            className="w-full"
          />
        </div>
      </div>

      {/* services */}
      <div className="flex flex-col gap-y-10">
        <h1 className="text-cobalt text-[34px] font-bold text-left">
          Cleaning services we offer
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-600 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/wipeicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">Standard cleaning</h1>
              <p>
                Experience a new level of cleanliness with our comprehensive
                standard cleaning service. Our expert team meticulously tends to
                every corner, ensuring a pristine and refreshing environment
                that exceeds expectations.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-600 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/cleaningicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">Deep cleaning</h1>
              <p>
                Elevate your surroundings with our thorough deep cleaning
                service. Our skilled team goes beyond the surface, tackling
                hidden grime and revitalizing your space to its purest state.
                Experience a truly rejuvenated and immaculate environment.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-600 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/eventicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">
                Special Events cleaning
              </h1>
              <p>
                Make your special moments shine with our event cleaning service.
                Our attentive team transforms your venue, ensuring every detail
                sparkles and impresses. From setup to teardown, we create a
                pristine backdrop, allowing you to celebrate without a worry.
                Let us make your event unforgettable, one clean corner at a
                time.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-600 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/warehouseicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">Industrial cleaning</h1>
              <p>
                Unleash the power of pristine with our industrial cleaning
                service. Our specialized team tackles the toughest challenges,
                restoring your industrial space to optimal conditions. From
                factories to warehouses, we ensure safety and efficiency while
                maintaining a clean and organized environment. Trust us to
                elevate your industrial standards, one thorough clean at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* cta */}
      <div className="flex md:flex-row flex-col justify-center w-full md:px-24 xxs:px-14 px-6 gap-x-24 md:gap-y-0 gap-y-8 pt-24">
        <div className="flex flex-col justify-center">
          <p className="text-cobalt font-light md:text-[16px] text-[14px] md:text-left text-center">
            Experince the Difference with Brighter Team - Your Staffing
            Solution!
          </p>
          <h1 className="text-cobalt font-semibold sd:text-[34px] text-[24px] md:text-left text-center">
            Partner with brighter team today
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Link
            href="https://contact.brighterteam.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[250px] h-[50px] bg-sun rounded-full shadow-lg text-cobalt font-semibold text-[20px]">
              Get a quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
