import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AnnoncementCard = ({item}: {item: NewsType}) => {
  return (
    <section data-aos="zoom-in" className='flex items-center w-full px-5 py-2 space-x-4 bg-white rounded-xl shadow overflow-hidden'>
        <Image 
            src={item.category.image}
            alt={item.title}
            width={400}
            height={400}
            className='object-contain w-[60px] h-[60px] rounded-full'
        />
        <div className='flex flex-col space-x-1 cursor-pointer'>
            <Link className='font-medium hover:text-yellow-700 text-yellow-600' href={`/news/${item.id}`}>
          {item.title.length > 15 ? `${item.title.slice(0, 15)}...` : item.title}
            </Link>
            <p className='text-xs text-black/60'>{item.description.slice(0,50)}...</p>
        </div>
    </section>
  )
}

export default AnnoncementCard