import Service from '@/components/Service'
import Image from 'next/image'
import React from 'react'

interface Content {
  id: string
  title: string
  subText: string
  overview: string[]
}

const content: Content = {
  id: 'personalcare1',
  title: 'Personal Care',
  subText:
    'Our personal care service at Rosam Care Services is centered around providing compassionate and comprehensive assistance to individuals who require support with their daily personal care needs. Our dedicated caregivers are committed to ensuring your comfort, dignity, and well-being.',
  overview: [
    'Collect prescriptions',
    'Provide light house keeping',
    'Dusting and Vacuuming',
    'Help with washing and ironing',
    'Make beds and change bed linen',
    'Answer the door',
    'Organise wardrobes and cupboards',
    'Take out the rubbish',
    'Meal preparation',
    ' Meal preparation and tidy away',
    'Check food expiry dates',
    'Supervise home maintenance',
    'Oversee home deliveries',
    'Care for houseplants',
    'Assist with pet care',
    'Prepare shopping lists',
    'Help with general shopping',
    'Drop off and collect dry cleaning',
  ],
}

function page() {
  return (
    <div className="flex flex-col justify-center md:px-24 xxs:px-14 px-6 pb-24">
      <div className="flex lg:flex-row flex-col justify-between pb-24 gap-x-6 lg:gap-y-0 gap-y-8">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-ampurple font-bold sd:text-[74px] xxs:text-[54px] text-[44px]">
            {content.title}
          </h1>
          <p className="font-light text-gray-500">{content.subText}</p>
        </div>
        <div className="flex-1">
          <Image
            src="/rsc-img1.jpg"
            alt="Caregiver"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-10">
        <div>
          <h1 className="text-ampurple text-[32px] font-bold text-left">
            What is {content.title}?
          </h1>
          <p className="text-left text-gray-500 font-light">
            We understand that certain tasks, such as bathing, dressing, and
            grooming, can become challenging due to various circumstances. Our
            caregivers are trained to provide respectful and sensitive
            assistance, making these activities more manageable for you.
            <br />
            <br />
            We also offer assistance with incontinence care, recognizing the
            importance of maintaining personal hygiene and ensuring your comfort
            and dignity throughout the process. Our caregivers are experienced
            in providing discreet and compassionate support in this sensitive
            area.
          </p>
        </div>
        <div>
          <h1 className="text-ampurple text-[32px] font-bold text-left">
            Personal Care from Brighter Team
          </h1>
          <p className="text-left text-gray-500 font-light">
            At Rosam Care Services, we understand that personal care is a deeply
            personal and important aspect of daily life. Our personal care
            service is specifically designed to prioritize your well-being by
            focusing on your comfort, dignity, and independence.
            <br />
            <br />
            Our caregivers are not only highly skilled but also deeply
            compassionate individuals who genuinely care about your needs and
            preferences. They are committed to providing personalized support
            tailored to your unique circumstances and requirements. We recognize
            the importance of maintaining your daily routine and ensuring that
            you can continue to engage in activities that bring you joy and
            fulfillment.
            <br />
            <br />
            We approach personal care with the utmost respect for your dignity
            and privacy. Whether it's assisting with bathing, dressing,
            grooming, or incontinence care, our caregivers uphold your comfort
            and well-being as their top priority. They are trained to handle
            these tasks sensitively, maintaining a compassionate and respectful
            approach throughout.
            <br />
            <br />
            For individuals living with conditions such as dementia or
            Alzheimer's, our caregivers receive specialized training to provide
            compassionate care that is tailored to the specific challenges and
            needs associated with these conditions. We create a safe and
            nurturing environment, focusing on reducing anxiety, promoting
            familiarity, and enhancing overall quality of life.
            <br />
            <br />
            At Rosam Care Services, we firmly believe in promoting your
            independence. Our caregivers are there to provide the necessary
            support and assistance while respecting your autonomy and personal
            choices. We aim to empower you to maintain your daily routine and
            engage in activities that contribute to your physical and emotional
            well-being.
            <br />
            <br />
            Our personal care service is designed to enhance your overall
            quality of life by ensuring that you receive the compassionate and
            personalized support you need. With Rosam Care Services, you can
            trust that our dedicated caregivers will prioritize your comfort,
            dignity, and independence throughout your care journey.
          </p>
        </div>
        <div>
          <h1 className="text-ampurple text-[32px] font-bold">
            What you can expect
          </h1>
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-4">
            {content.overview.map((point) => (
              <li
                key={point}
                className="flex flex-row space-x-2 font-light text-gray-500"
              >
                <Image
                  src="/circle-check.svg"
                  alt="circle check"
                  width={20}
                  height={20}
                />

                <div>{point}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page
