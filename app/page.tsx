'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col mx-auto lg:px-24 px-0 pb-24 w-full">
      {/* hero section */}

      <div className="flex ss:flex-row flex-col items-center justify-between w-full bg-ampurple lg:rounded-br-[400px]">
        <div className="flex-1 space-y-6 ss:py-0 py-10">
          <h1 className="xl:text-[74px] sd:text-[54px] text-[44px] font-bold text-white px-16">
            Brighter Team
          </h1>
          <p className="sd:text-[16px] text-[14px] text-white max-w-[800px] font-light px-16">
            Introducing Brighter Team, your trusted partner in personal care. As
            a full-service personal care agency, we are committed to delivering
            exceptional care to our valued clients. Whether you require
            domiciliary care in the comfort of your own home or seek dedicated
            agency staff for healthcare facilities, we have you covered.
          </p>
          <div>
            <Link href="/services" className="px-16">
              <button className="w-[200px] h-[50px] bg-white rounded-e-2xl shadow-lg text-ampurple font-semibold">
                Explore our services
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 overflow-hidden lg:rounded-br-[400px] justify-center flex">
          <Image
            src="/rsc-img2nb.png"
            alt="Nurse caregiver"
            width={330}
            height={100}
            className=""
          />
        </div>
      </div>

      {/* body section with row and row reverse */}

      <div className="flex flex-col justify-center items-center md:px-24 xxs:px-14 px-6 py-24 gap-y-24">
        <div className="flex sd:flex-row flex-col items-center justify-between w-full max-w-[1200px] gap-x-16">
          <div className="flex-1">
            <h1 className="sd:text-[44px] text-[34px] font-bold text-ampurple text-left">
              Excellence
            </h1>
            <p className="max-w-[600px] font-light text-gray-500 sd:text-[16px] text-[14px] sd:pb-0 pb-8">
              The cornerstone of our services at Brighter Team is excellence. We
              strive for nothing less than the highest standards of care,
              ensuring that each interaction with our clients is characterized
              by professionalism, expertise, and attention to detail. Our team
              of caregivers and healthcare professionals is dedicated to
              continuous learning and improvement, staying up-to-date with the
              latest best practices to deliver exceptional care that exceeds
              expectations.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/rsc-img1.jpg"
              alt="Caregiver"
              width={500}
              height={500}
              className="xxs:rounded-3xl rounded-lg"
            />
          </div>
        </div>
        <div className="flex sd:flex-row-reverse flex-col items-center justify-between w-full max-w-[1200px] gap-x-16">
          <div className="flex-1">
            <h1 className="sd:text-[44px] text-[34px] font-bold text-ampurple text-right">
              Reliability
            </h1>
            <p className="text-right max-w-[600px] font-light text-gray-500 sd:text-[16px] text-[14px] sd:pb-0 pb-8">
              At the core of our operations is reliability. We understand the
              importance of consistency and dependability in providing care
              services. Our clients and partner organizations can trust us to be
              there when we are needed, without fail. We uphold our commitments
              and honor our agreements, ensuring that our clients receive the
              care they require, precisely when they need it. With Brighter
              Team, reliability is not just a promise—it's a fundamental value
              we uphold every day.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/rsc-img3.jpg"
              alt="Caregiver"
              width={500}
              height={500}
              className="xxs:rounded-3xl rounded-lg"
            />
          </div>
        </div>
        <div className="flex sd:flex-row flex-col items-center justify-between w-full max-w-[1200px] gap-x-16">
          <div className="flex-1">
            <h1 className="sd:text-[44px] text-[34px] font-bold text-ampurple text-left">
              Personalised
            </h1>
            <p className="max-w-[600px] font-light text-gray-500 sd:text-[16px] text-[14px] sd:pb-0 pb-8">
              Personalized care lies at the heart of what we do. We recognize
              that each individual has unique needs and preferences, and we
              tailor our services accordingly. Our compassionate caregivers take
              the time to understand our clients' specific requirements,
              enabling us to provide customized care plans that address their
              physical, emotional, and social well-being. We believe that
              personalized care fosters a trusting relationship between our
              caregivers and clients, ensuring a comfortable and supportive
              environment for all.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/rsc-img1.jpg"
              alt="Caregiver"
              width={500}
              height={500}
              className="xxs:rounded-3xl rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Call to action bit */}

      <div className="flex sm:flex-row flex-col justify-between w-full py-10 md:px-24 xxs:px-14 px-6 gap-x-10 sm:gap-y-0 gap-y-8">
        <div className="flex flex-col justify-center">
          <p className="text-ampurple font-light sm:text-[16px] text-[14px] sm:text-left text-center">
            Find the right care for you today with Brighter Team
          </p>
          <h1 className="text-ampurple font-bold sd:text-[54px] text-[44px] sm:text-left text-center">
            Discover Our Care Solutions
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/services">
            <button className="w-[200px] h-[50px] bg-ampurple rounded-2xl shadow-lg text-white font-semibold text-[20px]">
              Services
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
