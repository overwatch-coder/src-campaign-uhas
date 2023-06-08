import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

type NewsCardProps = {
    news: NewsType
}

const NewsCard = ({news}: NewsCardProps) => {
  return (
    <div className='w-[300px] mx-auto shadow-lg'>
        <Image 
            src={news.image}
            alt={news.title}
            width={500}
            height={500}
            className='object-contain w-full md:w-[300px] h-[300px]'
        />

        <div className='flex flex-col space-y-3'>
            <h3 className='px-3 py-3 text-white bg-red-main'>{news.title.length > 30 ? news.title.slice(0,30) : news.title}</h3>

            <Link href={`/news/${news.id}`} className='flex items-center px-3 py-2 space-x-2 group'>
                <span className='text-red-main group-hover:underline'>Read more</span>
                <AiOutlineArrowRight size={16} color='#BB1919'/>
            </Link>
        </div>
    </div>
  )
}

export default NewsCard