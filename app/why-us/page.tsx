import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col mx-auto px-24 pb-24 w-full gap-y-16">
      <div className="flex sd:flex-row flex-col justify-between gap-x-6">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="xl:text-[74px] text-[54px] font-bold text-ampurple">
            Why Choose Us?
          </h1>
          <p className="text-gray-500 font-light">
            Our commitment to care is unwavering. We are dedicated to providing
            compassionate and high-quality care to our clients, ensuring their
            well-being and comfort are our top priorities.
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
        <h1 className="text-[36px] font-bold text-ampurple">Passionate care</h1>
        <p className="max-w-[900px] text-left text-gray-500 font-light">
          For those in need of personalized care and support within their own
          homes, Brighter Team offers comprehensive domiciliary care. Our
          compassionate and highly trained caregivers will assist you with daily
          activities, such as meal preparation, medication management, personal
          hygiene, and companionship. We prioritize your comfort and well-being,
          ensuring that you receive the individualized attention and care you
          deserve.
          <br />
          <br />
          In addition to providing domiciliary care, Brighter Team partners with
          NHS Trusts, hospitals, care homes, and other healthcare organizations
          to supply highly qualified agency staff. Our dedicated professionals
          are thoroughly vetted, skilled, and experienced, ensuring seamless
          integration into your healthcare facility. Whether you require
          temporary staffing solutions, additional support during peak periods,
          or specialized care services, we are here to meet your staffing needs.
          <br />
          <br />
          At Brighter Team, we pride ourselves on our commitment to excellence,
          reliability, and personalized care. Our team of compassionate
          caregivers and healthcare professionals is passionate about making a
          positive impact on the lives of our clients and ensuring their utmost
          comfort and well-being.
          <br />
          <br />
          Choose Brighter Team for all your personal care needs. We are here to
          provide exceptional care and support, whether in the comfort of your
          own home or in healthcare facilities. Contact us today to discover how
          we can assist you or your organization in achieving optimal care
          outcomes.
        </p>
      </div>
    </div>
  )
}

export default page
