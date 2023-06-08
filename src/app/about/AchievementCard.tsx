import React from 'react'

type AchievementCardProps ={
    title: string,
    description: string
}

const AchievementCard = ({title, description}: AchievementCardProps) => {
  return (
    <div className='p-4 bg-white rounded shadow-md border-l-[10px] border-l-primary space-y-2'>
        <h2 className='font-medium uppercase md:text-xl text-primary'>{title}</h2>
        <p className='text-sm text-black/70'>{description}</p>
    </div>
  )
}

export default AchievementCard