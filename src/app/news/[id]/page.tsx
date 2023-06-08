'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const NewsDetails = () => {
    const {id} = useParams();
  return (
    <div className='px-10 mt-20 text-3xl'>NewsDetails - {id}</div>
  )
}

export default NewsDetails