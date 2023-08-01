'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col mx-auto lg:px-24 px-0 pb-24 w-full">
      {/* hero section */}

      <div className="flex ss:flex-row flex-col items-center justify-between w-full bg-sun lg:rounded-br-[400px]">
        <div className="flex-1 space-y-6 ss:py-0 py-10">
          <h1 className="xl:text-[74px] sd:text-[54px] text-[44px] font-semibold text-cobalt px-16">
            brighter team
          </h1>
          <p className="sd:text-[16px] text-[14px] text-cobalt max-w-[800px] font-light px-16">
            Brighter Team is the premier staffing agency that bridges the gap
            between exceptional talent and dynamic organizations. With a passion
            for connecting the right people with the right opportunities, we are
            committed to driving success for both employers and job seekers
            alike.
          </p>
          <div>
            <Link href="/contact" className="px-16">
              <button className="w-[200px] h-[50px] bg-white rounded-e-2xl shadow-lg text-cobalt font-semibold">
                Get Started Now
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
            <h1 className="sd:text-[44px] text-[34px] font-semibold text-cobalt text-left">
              skilled professionals
            </h1>
            <p className="max-w-[600px] font-light text-gray-500 sd:text-[16px] text-[14px] sd:pb-0 pb-8">
              Brighter Team offers a wide selection of skilled professionals
              ready to meet your staffing needs. Whether you require caring and
              compassionate caregivers or meticulous and proficient cleaning
              experts, our talent pool is teeming with experienced individuals.
              With our vast network of skilled professionals, you can trust us
              to swiftly find the right match for your specific staffing
              requirements.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/rsc-img1.jpg"
              alt="Caregiver"
              width={500}
              height={500}
              className="xxs:rounded-md rounded-lg"
            />
          </div>
        </div>
        <div className="flex sd:flex-row-reverse flex-col items-center justify-between w-full max-w-[1200px] gap-x-16">
          <div className="flex-1">
            <h1 className="sd:text-[44px] text-[34px] font-semibold text-cobalt text-right">
              personalized approach
            </h1>
            <p className="text-right max-w-[600px] font-light text-gray-500 sd:text-[16px] text-[14px] sd:pb-0 pb-8">
              We understand that every business and individual is unique, and a
              one-size-fits-all approach doesn't work. That's why we take the
              time to listen and understand your staffing needs and company
              culture. Our personalized approach ensures that we find the
              perfect match between our talented professionals and your specific
              requirements. We work closely with you to ensure a seamless and
              successful integration of our staff into your team, fostering
              lasting partnerships and positive results.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/rsc-img3.jpg"
              alt="Caregiver"
              width={500}
              height={500}
              className="xxs:rounded-md rounded-lg"
            />
          </div>
        </div>
        <div className="flex sd:flex-row flex-col items-center justify-between w-full max-w-[1200px] gap-x-16">
          <div className="flex-1">
            <h1 className="sd:text-[44px] text-[34px] font-semibold text-cobalt text-left">
              trusted and reliable
            </h1>
            <p className="max-w-[600px] font-light text-gray-500 sd:text-[16px] text-[14px] sd:pb-0 pb-8">
              At Brighter Team, trust and reliability are the cornerstones of
              our service. We take pride in our track record of providing
              exceptional staffing solutions to businesses and individuals
              alike. Our commitment to delivering consistent excellence and
              exceptional support has earned us the trust of countless clients.
              When you choose us, you can rest assured that you're partnering
              with a staffing agency that genuinely cares about your success and
              the well-being of your loved ones. With Brighter Team, you can
              confidently focus on what you do best, knowing that your staffing
              needs are in capable and caring hands.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/rsc-img1.jpg"
              alt="Caregiver"
              width={500}
              height={500}
              className="xxs:rounded-md rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Call to action bit */}

      <div className="flex md:flex-row flex-col justify-center w-full py-10 md:px-24 xxs:px-14 px-6 gap-x-24 md:gap-y-0 gap-y-8">
        <div className="flex flex-col justify-center">
          <p className="text-cobalt font-light md:text-[16px] text-[14px] md:text-left text-center">
            Experince the Difference with Brighter Team - Your Staffing
            Solution!
          </p>
          <h1 className="text-cobalt font-semibold sd:text-[44px] text-[44px] md:text-left text-center">
            partner with brighter team today
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/services">
            <button className="w-[250px] h-[50px] bg-sun rounded-full shadow-lg text-cobalt font-semibold text-[20px]">
              Find Your Match
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
