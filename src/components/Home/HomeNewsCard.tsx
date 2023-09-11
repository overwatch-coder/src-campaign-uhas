import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeNewsCard = ({item}: {item: NewsType}) => {
  return (
    <div data-aos="zoom-in" className='relative flex flex-col px-4 py-4 space-y-4 h-fit bg-white rounded-2xl shadow overflow-hidden'>
        <Image 
          src={item.category.image}
          alt={item.title}
        width={500}
        style={{borderRadius: "12px"}}
          height={500}  
        />
        <p className='text-black'>{item.title.length > 20 ? item.title.slice(0,20) : item.title}</p>
        
        <Link 
            className='underline hover:text-yellow-700 text-yellow-600' 
            href={`/news/${item.id}`}
        >
            Read more
        </Link>
    </div>
  )
}

export default HomeNewsCard