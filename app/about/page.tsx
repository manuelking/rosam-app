import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col mx-auto md:px-24 xxs:px-14 px-6 pb-24 w-full gap-y-16">
      <div className="flex sd:flex-row flex-col justify-between gap-x-6 sd:gap-y-0 gap-y-8">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="xl:text-[74px] sd:text-[54px] text-[44px] font-bold text-cobalt">
            About Brighter Team
          </h1>
          <p className="text-gray-500 font-light">
            At Brighter Team, we are dedicated to illuminating lives and spaces
            with exceptional staffing solutions. As a reputable staffing agency,
            we have been connecting businesses and individuals with skilled
            professionals for various services, ranging from compassionate
            caregiving to meticulous cleaning expertise.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/rsc-img1.jpg"
            alt="Nurse care"
            width={1000}
            height={500}
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-10">
        <h1 className="text-[30px] font-bold text-cobalt">Our Vision</h1>
        <p className="max-w-[900px] text-left text-gray-500 font-light">
          Our vision is simple yet powerful - to bring brightness into people's
          lives by matching them with the right talent. We believe that the
          right professionals can make a significant impact, transforming
          businesses and enhancing the quality of life for individuals. With
          this vision at the heart of our operations, we strive to deliver
          staffing solutions that empower success and foster lasting
          partnerships.
        </p>
        <h1 className="text-[30px] font-bold text-cobalt">
          What Sets Us Apart
        </h1>
        <p className="max-w-[900px] text-left text-gray-500 font-light">
          At Brighter Team, we understand that every client and candidate is
          unique. Therefore, we go beyond the usual recruitment processes to
          offer a personalized touch. Our experienced team takes the time to
          listen, understand, and identify the specific needs of each client. We
          delve deep into the qualifications, skills, and aspirations of our
          candidates, ensuring a seamless and harmonious match with the perfect
          organization.
        </p>
        <h1 className="text-[30px] font-bold text-cobalt">
          Our Diverse Talent Pool
        </h1>
        <p className="max-w-[900px] text-left text-gray-500 font-light">
          Our strength lies in our diverse talent pool, teeming with skilled
          professionals from various industries and specializations. From
          nurturing caregivers who provide compassionate support to meticulous
          cleaning experts who leave no corner untouched, our talent pool boasts
          versatility and expertise. With Brighter Team, you gain access to a
          broad spectrum of professionals, all ready to brighten your world.
        </p>
        <h1 className="text-[30px] font-bold text-cobalt">
          Trusted Partnerships
        </h1>
        <p className="max-w-[900px] text-left text-gray-500 font-light">
          Brighter Team values trust and reliability above all else. We are
          committed to building lasting partnerships with our clients and
          candidates alike. Our track record speaks volumes about our commitment
          to excellence, as numerous businesses have achieved improved
          productivity and exceptional results through our staffing services.
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-center w-full py-10 md:px-24 xxs:px-14 px-6 gap-x-24 md:gap-y-0 gap-y-8">
        <div className="flex flex-col justify-center">
          <p className="text-cobalt font-light md:text-[16px] text-[14px] md:text-left text-center">
            Experince the Difference with Brighter Team - Your Staffing
            Solution!
          </p>
          <h1 className="text-cobalt font-semibold text-[34px] md:text-left text-center">
            Your Journey to Success Starts with Brighter Team
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/contact">
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
