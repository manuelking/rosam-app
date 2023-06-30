import React from 'react'

interface Content {
  id: string
  title: string
  subText: string
  overview: string[]
}

interface ServiceProps {
  content: Content
}

function Service({ content }: ServiceProps) {
  const { id, title, subText, overview } = content
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-between pb-24">
        <div>
          <h1>{title}</h1>
          <p>{subText}</p>
        </div>
        <div>
          <p>img</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-ampurple text-[32px] font-bold">
          What is {title}?
        </h1>
        <p className="text-center">description</p>
        <h1 className="text-ampurple text-[32px] font-bold">
          What you can expect
        </h1>
        <ul className="grid grid-cols-2">
          {overview.map((point, index) => (
            <li key={`${id}-${index}`}>&#10004; {point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Service
