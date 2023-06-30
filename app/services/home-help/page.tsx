import Service from '@/components/Service'
import React from 'react'

interface Content {
  title: string
  subText: string
  overview: string[]
}

const content: Content = {
  title: 'Home Help Service',
  subText: 'This is the home help service page',
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
    <div className="p-24">
      <Service content={content} />
    </div>
  )
}

export default page
