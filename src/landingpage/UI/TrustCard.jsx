import React from 'react'

const AwardCard = ({title, description}) => {
  return (
    <div className="flex flex-col items-start">
        <h2 className="text-text-color text-xl font-medium mb-1">{title}</h2>
        <p className="text-text-color opacity-80 text-md max-w-100">{description}</p>
    </div>
  )
}

export default AwardCard;