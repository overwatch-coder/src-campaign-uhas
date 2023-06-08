import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type HeroTypeProps = {
    image: StaticImageData,
    route: string,
    children: React.ReactNode
}

const HeroComponent = ({image, route, children}: HeroTypeProps) => {
  return (
    <section className='relative pt-10 mx-auto text-center'>
        {/* overlay */}
        <div className='absolute inset-0 bg-black/70'></div>

        <Image 
            src={image}
            alt='hero image'
            className='object-cover w-full h-[30vh] md:h-[40vh]'
        />

        <div className='absolute flex flex-col mx-auto mt-5 space-y-4 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>

            <h2 className='flex items-center space-x-3 text-4xl font-semibold text-white md:text-5xl font-oswald'>
                {children}
            </h2>

            <div className='flex items-center mx-auto space-x-2 text-center'>
                <Link href={'/'} className='text-red-600 underline hover:text-red-800'>Home</Link>
                <span className='text-white'>/</span>
                <span className='text-white'>{route}</span>
            </div>
        </div>
    </section>
  )
}

export default HeroComponent