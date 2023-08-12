import React from 'react'

const GalleryIntro = () => {
  return (
    <section
        className='flex flex-col px-10 pt-10 mx-auto space-y-5 bg-white overflow-hidden'
    >
        <h2 className='text-2xl font-semibold text-center hover:text-yellow-700 text-yellow-600 md:text-3xl'>Time with Johnson Eziel Weitzmann</h2>
        <p className='text-black/70 tracking-wide leading-[1.8] text-center text-sm md:text-base'>
            Stay informed about the latest updates of Johnson. Get timely information on important events and memories.
        </p>
    </section>
  )
}

export default GalleryIntro