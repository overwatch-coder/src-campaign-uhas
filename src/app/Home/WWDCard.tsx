import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
type WWDCardProps = {
    title: string,
    excerpt: string,
    path: string,
    img: StaticImageData
}

const WWDCard = ({title, excerpt, path, img}: WWDCardProps) => {
  return (
    <div className='flex flex-col p-5 space-y-5 text-black bg-white rounded-md shadow-md'>
        <div className='flex items-center space-x-3'>
            <Image 
                alt={title}
                width={500}
                height={500}
                className='object-contain w-10 h-10 rounded-full'
                src={img}
            />

            <h3 className='font-medium'>{title}</h3>
        </div>
        <div className='flex flex-col space-y-3'>
            <p className='text-sm text-justify text-black/70'
            > 
                {excerpt} {" ..."}
            </p>
            <Link 
                href={path}
                className='font-semibold hover:text-primary hover:underline w-fit'
            >
                Know more
            </Link>
        </div>
    </div>
  )
}

export default WWDCard