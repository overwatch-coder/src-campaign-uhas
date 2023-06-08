import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AnnoncementCard = ({item}: {item: NewsType}) => {
  return (
    <section data-aos="zoom-in" className='flex items-center w-full px-5 py-2 space-x-4 bg-white rounded shadow'>
        <Image 
            src={item.images[0]}
            alt={item.title}
            width={400}
            height={400}
            className='object-contain w-[60px] h-[60px] rounded-full'
        />
        <div className='flex flex-col space-x-1 cursor-pointer'>
            <Link className='font-medium text-blue-main hover:text-red-main' href={`/news/${item.id}`}>
                {item.title}
            </Link>
            <p className='text-xs text-black/60'>{item.description.slice(0,50)}...</p>
        </div>
    </section>
  )
}

export default AnnoncementCard