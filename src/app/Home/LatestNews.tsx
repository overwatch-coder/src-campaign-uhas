'use client'

import React from 'react'
import NewsCard from './NewsCard';
import Carousel from 'better-react-carousel'
import { FetchNews } from '../utils/FetchNews';

const LatestNews = () => {
    const {data, isLoading} = FetchNews();
    
    const responsiveBreakpoints = [
        {breakpoint: 1024, cols: 3, rows: 1, gap: 30},
        {breakpoint: 768, cols: 2, rows: 1, gap: 30},
        {breakpoint: 600, cols: 1, rows: 1, gap: 30},
        {breakpoint: 3000, cols: 4, rows: 1, gap: 30}
    ]

  return (
    <section className='flex flex-col px-10 pt-10 pb-16 space-y-4 bg-white'>
        <div className='space-y-3 text-center'>
            <h2 className='text-3xl font-semibold md:text-4xl'>Latest News</h2>
            <p className='text-sm text-gray-600'>Stay Informed with the Buzz and Updates of the Campaign Trail.</p>
        </div>

        <div className='relative pt-6'>
            {!isLoading ? <Carousel
                responsiveLayout={responsiveBreakpoints}
                hideArrow={false}
                mobileBreakpoint={600}
            >
                {data?.slice(0,10).map((item: NewsType, index: number) => (
                    <Carousel.Item key={index}>
                        <NewsCard 
                            key={index} 
                            news={item}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            : 
            <h3 className='text-2xl font-semibold text-center'>Loading news...</h3>
            }
        </div>
    </section>
  )
}

export default LatestNews