import Service from '@/components/Service'
import Image from 'next/image'
import React from 'react'

interface Content {
  id: string
  title: string
  subText: string
  about: string[]
  overview: string[]
}

const content: Content = {
  id: 'companionship3',
  title: 'Companionship',
  subText:
    'Our companionship service at Brighter Team is all about fostering meaningful connections and enhancing the quality of life for our clients. We understand the importance of social interaction and mental stimulation, which is why our dedicated caregivers offer companionship and engaging conversations.',
  about: [
    'At Brighter Team, we understand that companionship is not just about physical presence but about forging deep connections that uplift spirits and create a sense of belonging. Our caregivers are dedicated to being there for you, providing unwavering support and genuine care every step of the way.',
    'Beyond the practical aspects of care, our caregivers offer emotional support, lending a compassionate ear and a comforting presence. They take the time to truly get to know you, your interests, and your life experiences, fostering a genuine bond built on trust and understanding. Whether it&apos;s sharing stories, offering a listening ear, or providing a shoulder to lean on, our caregivers are committed to being there for you in a meaningful and heartfelt way.',
    'Our companions are also skilled in providing assistance with various tasks, helping to make your daily life more manageable and enjoyable. Whether it&apos;s helping with household chores, organizing personal belongings, or running errands together, our caregivers are there to lend a helping hand, ensuring that you have the support you need to maintain an active and fulfilling lifestyle.',
    'At Brighter Team, we strive to be more than just caregivers – we aim to be your trusted companions. We understand the importance of human connection and the impact it has on your overall well-being. Our goal is to enhance your quality of life by bringing moments of joy, laughter, and companionship into your everyday experiences. Let us be the reliable, caring presence that brightens your days and makes you feel truly valued and supported.',
  ],
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

interface ServiceProps {
  content: Content
}

function page() {
  return (
    <div className="flex flex-col justify-center px-24 pb-24">
      <div className="flex flex-row justify-between pb-24 gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-ampurple font-bold text-[74px]">
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
            Whether it's accompanying you to appointments or helping with
            clothing selection, our compassionate caregivers are there to
            provide support and assistance. We also encourage and participate in
            hobbies, crafts, and reading activities, promoting mental awareness
            and personal fulfillment.
            <br />
            <br />
            Our companionship service extends beyond the home. We plan visits,
            outings, and trips, allowing you to explore new experiences and make
            lasting memories. From attending plays, concerts, and sporting
            events to joining club meetings, our caregivers ensure that you can
            engage in activities that bring you joy and enrich your life.
          </p>
        </div>
        <div>
          <h1 className="text-ampurple text-[32px] font-bold text-left">
            Companionship from Brighter Team
          </h1>
          <p className="text-left font-light text-gray-500">
            At Brighter Team, we understand that companionship is not just about
            physical presence but about forging deep connections that uplift
            spirits and create a sense of belonging. Our caregivers are
            dedicated to being there for you, providing unwavering support and
            genuine care every step of the way.
            <br />
            <br />
            Beyond the practical aspects of care, our caregivers offer emotional
            support, lending a compassionate ear and a comforting presence. They
            take the time to truly get to know you, your interests, and your
            life experiences, fostering a genuine bond built on trust and
            understanding. Whether it's sharing stories, offering a listening
            ear, or providing a shoulder to lean on, our caregivers are
            committed to being there for you in a meaningful and heartfelt way.
            <br />
            <br />
            Our companions are also skilled in providing assistance with various
            tasks, helping to make your daily life more manageable and
            enjoyable. Whether it's helping with household chores, organizing
            personal belongings, or running errands together, our caregivers are
            there to lend a helping hand, ensuring that you have the support you
            need to maintain an active and fulfilling lifestyle.
            <br />
            <br />
            At Brighter Team, we strive to be more than just caregivers – we aim
            to be your trusted companions. We understand the importance of human
            connection and the impact it has on your overall well-being. Our
            goal is to enhance your quality of life by bringing moments of joy,
            laughter, and companionship into your everyday experiences. Let us
            be the reliable, caring presence that brightens your days and makes
            you feel truly valued and supported.
          </p>
        </div>
        <div>
          <h1 className="text-ampurple text-[32px] font-bold">
            What you can expect
          </h1>
          <ul className="grid grid-cols-2">
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
