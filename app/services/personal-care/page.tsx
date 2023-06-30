import Service from '@/components/Service'
import React from 'react'

interface Content {
  title: string
  subText: string
  overview: string[]
}

const content: Content = {
  title: 'Personal Care',
  subText: 'This is the title page',
  overview: ['text1'],
}

function page() {
  return (
    <div className="p-24">
      <Service content={content} />
    </div>
  )
}

export default page
