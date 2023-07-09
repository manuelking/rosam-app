import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col mx-auto md:px-24 xxs:px-14 px-6 pb-24 w-full gap-y-16">
      <div className="flex sd:flex-row flex-col justify-between gap-x-6 sd:gap-y-0 gap-y-8">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="xl:text-[74px] sd:text-[54px] text-[44px] font-bold text-ampurple">
            Quality and Care
          </h1>
          <p className="text-gray-500">
            At Brighter Team, quality care is continuous. Trust us for
            exceptional care that exceeds expectations.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/rsc-img1.jpg"
            alt="Nurse care"
            width={1000}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-10">
        <h1 className="text-[36px] font-bold text-ampurple">
          Quality Assurance
        </h1>
        <p className="max-w-[900px] text-left text-gray-500">
          At Brighter Team, we uphold a steadfast commitment to maintaining and
          enhancing the quality of care we provide. We believe that quality
          assurance is not a one-time event, but an ongoing and dynamic process
          that requires constant attention and improvement.
          <br />
          <br />
          Continuous quality assurance is ingrained in our organizational
          culture. We have established rigorous systems and processes that
          enable us to monitor, evaluate, and refine our care practices on an
          ongoing basis. Our dedicated team of professionals regularly review
          our protocols, procedures, and training methods to ensure they align
          with the latest industry standards and evidence-based practices.
          <br />
          <br />
          We conduct regular audits and assessments to identify areas where we
          can further enhance the quality of our care. These assessments
          encompass a range of factors, including client satisfaction, caregiver
          performance, adherence to care plans, and compliance with regulatory
          requirements. Through systematic evaluation, we are able to identify
          opportunities for improvement and take proactive measures to address
          any gaps in our services.
          <br />
          <br />
          Feedback from our clients and their families is a crucial component of
          our continuous quality assurance efforts. We actively encourage open
          and transparent communication, welcoming their input and incorporating
          their perspectives into our improvement initiatives. By listening
          attentively to their feedback, we gain valuable insights that help us
          refine our care processes and better meet their unique needs.
          <br />
          <br />
          Additionally, our team members are committed to professional
          development and staying updated with the latest advancements in the
          field of care. We provide ongoing training and education opportunities
          to ensure that our caregivers and healthcare professionals are
          equipped with the knowledge and skills necessary to deliver the
          highest quality of care to our clients.
          <br />
          <br />
          At Brighter Team, continuous quality assurance is not just a box to
          check—it is a fundamental aspect of our commitment to excellence. We
          strive for continual improvement in every aspect of our services,
          working diligently to exceed expectations and provide an unparalleled
          care experience for our clients. Your well-being and satisfaction are
          at the heart of our ongoing pursuit of excellence.
        </p>
      </div>
    </div>
  )
}

export default page
