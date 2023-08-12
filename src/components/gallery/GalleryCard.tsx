import Image from 'next/image';
import React, { useState } from 'react'

type GalleryCardProps = {
    id: number;
    title: string;
    src: any,
    alt: string,
}

const GalleryCard = (image: GalleryCardProps) => {
  return (
    <section data-aos="zoom-in" className='flex items-center w-full h-fit rounded shadow overflow-hidden'>
      <div className="relative" key={image.id}>
        <Image src={image.src} key={image.id} alt={image.alt} className="w-300 h-300 object-cover rounded-lg" />
        <div className="absolute inset-0 transition-opacity hover:opacity-100">
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div>
              <p className="text-gray-100 text-sm font-medium">{image.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryCard