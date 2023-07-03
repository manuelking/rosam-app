import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col mx-auto px-24 pb-24 w-full gap-y-16">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-center">
          <h1 className="text-[84px] font-bold text-ampurple">
            Why Choose Us?
          </h1>
          <p className="text-gray-500">
            our commitment to care is unwavering. We are dedicated to providing
            compassionate and high-quality care to our clients, ensuring their
            well-being and comfort are our top priorities.
          </p>
        </div>
        <div>
          <Image
            src="/rsc-img1.jpg"
            alt="Nurse care"
            width={1000}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-10">
        <h1 className="text-[36px] font-bold text-ampurple">Passionate care</h1>
        <p className="max-w-[900px] text-left text-gray-500">
          For those in need of personalized care and support within their own
          homes, Rosam Care Services offers comprehensive domiciliary care. Our
          compassionate and highly trained caregivers will assist you with daily
          activities, such as meal preparation, medication management, personal
          hygiene, and companionship. We prioritize your comfort and well-being,
          ensuring that you receive the individualized attention and care you
          deserve.
          <br />
          <br />
          In addition to providing domiciliary care, Rosam Care Services
          partners with NHS Trusts, hospitals, care homes, and other healthcare
          organizations to supply highly qualified agency staff. Our dedicated
          professionals are thoroughly vetted, skilled, and experienced,
          ensuring seamless integration into your healthcare facility. Whether
          you require temporary staffing solutions, additional support during
          peak periods, or specialized care services, we are here to meet your
          staffing needs.
          <br />
          <br />
          At Rosam Care Services, we pride ourselves on our commitment to
          excellence, reliability, and personalized care. Our team of
          compassionate caregivers and healthcare professionals is passionate
          about making a positive impact on the lives of our clients and
          ensuring their utmost comfort and well-being.
          <br />
          <br />
          Choose Rosam Care Services for all your personal care needs. We are
          here to provide exceptional care and support, whether in the comfort
          of your own home or in healthcare facilities. Contact us today to
          discover how we can assist you or your organization in achieving
          optimal care outcomes.
        </p>
      </div>
    </div>
  )
}

export default page
