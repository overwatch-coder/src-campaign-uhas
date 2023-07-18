import { subtle } from 'crypto'
import React from 'react'

type AchievementCardProps = {
  title: string,
  description: any,
}

const AchievementCard = ({title, description}: AchievementCardProps) => {
  return (
    <div className='p-4 bg-white rounded shadow-md border-l-[10px] border-l-primary space-y-2'>
      <h2 className='font-medium uppercase md:text-xl text-primary'>{title}</h2>
      {description.point ? 
      <div>
        <p className=''>{description.subtitle}</p>
        <p className='text-md tracking-wide text-black/70'>{description.describe}</p>
        <p className='p-4  tracking-wide text-black/70'>{description.point}</p>
        <p className='p-4 tracking-wide text-black/70'>{description.point1}</p>
        <p className='p-4 tracking-wide text-black/70'>{description.point2}</p>
        <p className='p-4 tracking-wide text-black/70'>{description.point3}</p>
      </div>
      
      :
        <p className='text-sm tracking-wide text-black/70'>{description}</p>
      
      }
    </div>
  )
}

export default AchievementCard