import Service from '@/components/Service'
import Image from 'next/image'
import React from 'react'

interface Content {
  id: string
  title: string
  overview: string[]
}

const content: Content = {
  id: 'home-help2',
  title: 'Home Help',
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
          <h1 className="text-cobalt font-bold sd:text-[74px] xxs:text-[54px] text-[44px]">
            {content.title}
          </h1>
          <p className="font-light text-gray-500">
            Our home help service at Brighter Team is designed to provide
            comprehensive support and assistance with various household tasks.
            We understand that managing a home can sometimes be overwhelming,
            especially for those with limited mobility or busy schedules. That's
            where our dedicated caregivers step in to lend a helping hand.
          </p>
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
          <h1 className="text-cobalt text-[32px] font-bold text-left">
            What is {content.title}?
          </h1>
          <p className="text-left font-light text-gray-500">
            In addition to housekeeping, we offer practical assistance with
            daily chores. Our caregivers can assist with tasks such as washing
            and ironing, making beds, changing bed linen, and taking out the
            rubbish. We also provide support in meal preparation, including
            checking food expiry dates, meal planning, and tidy-up after meals.
            <br />
            <br />
            Our home help service extends beyond household tasks. We understand
            the importance of maintaining a well-functioning home, which is why
            our caregivers can supervise home maintenance, oversee deliveries,
            and care for houseplants. We also offer assistance with pet care,
            ensuring that your furry companions receive the attention and care
            they deserve.
          </p>
        </div>
        <div>
          <h1 className="text-cobalt text-[32px] font-bold text-left">
            Home Help from Brighter Team
          </h1>
          <p className="text-left text-gray-500 font-light">
            Our caregivers approach their duties with a genuine commitment to
            making your life more manageable. Whether it's light housekeeping,
            meal preparation, or assistance with personal tasks like washing and
            ironing, our aim is to enhance your daily living experience. By
            taking care of these essential tasks, we create a comfortable and
            organized living space that promotes your well-being and peace of
            mind.
            <br />
            <br />
            We understand that life can be hectic, and errands and household
            chores can sometimes feel overwhelming. That's why we offer
            additional services such as overseeing home maintenance, caring for
            houseplants, and supporting pet care. Our goal is to alleviate the
            burdens of these responsibilities, allowing you to enjoy a
            harmonious and stress-free home life.
            <br />
            <br />
            At Brighter Team, we believe that everyone deserves a helping hand
            and a supportive environment. Our caregivers are dedicated to
            providing reliable and compassionate support, ensuring that you can
            enjoy a comfortable and well-maintained home. Trust us to lighten
            your load and make your daily life more manageable, so you can focus
            on the things that truly matter to you.
          </p>
        </div>
        <div>
          <h1 className="text-cobalt text-[32px] font-bold">
            What you can expect
          </h1>
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-4">
            {content.overview.map((point) => (
              <li
                key={point}
                className="flex flex-row space-x-2 text-gray-500 font-light"
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
