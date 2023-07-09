import React from 'react'

interface Content {
  id: string
  title: string
  subText: string
  about: string[]
  overview: string[]
}

interface ServiceProps {
  content: Content
}

function Service({ content }: ServiceProps) {
  const { id, title, about, subText, overview } = content
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-between pb-24">
        <div className="flex-1 flex flex-col">
          <h1 className="text-ampurple font-bold text-[74px]">{title}</h1>
          <p className="font-light text-gray-500">{subText}</p>
        </div>
        <div className="flex-1">
          <p>img</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-ampurple text-[32px] font-bold">
          What is {title}?
        </h1>
        <p className="text-center">{about}</p>
        <h1 className="text-ampurple text-[32px] font-bold">
          What you can expect
        </h1>
        <ul className="grid grid-cols-2">
          {overview.map((point) => (
            <li key={id}>&#10004; {point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Service
