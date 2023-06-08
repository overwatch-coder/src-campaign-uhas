import React from 'react'
import { MdRssFeed } from 'react-icons/md'
import { TfiAnnouncement } from 'react-icons/tfi'
import { FetchNews } from '../utils'
import HomeNewsCard from './HomeNewsCard'
import AnnoncementCard from './AnnoncementCard'

const HomeNews = async (): Promise<any>  => {
    const news: NewsType[] = await FetchNews('https://api.escuelajs.co/api/v1/products');
    
  return (
    <section className='flex flex-col px-10 pt-10 pb-16 space-y-5 bg-bg-primary md:flex-row md:justify-between md:space-y-0 md:space-x-10'>
        <div className='flex flex-col flex-1 space-y-5'>
            <h3 date-aos="slide-up" className='flex items-center pb-3 space-x-3 border-b-2 border-black'>
                <MdRssFeed size={30} color='black' />
                <span className='text-xl font-medium md:text-2xl'>Latest News</span>
            </h3>

            <div className='grid grid-cols-1 gap-10 mx-auto md:grid-cols-2'>
                {news?.filter((item: NewsType) => item.images[0].includes('picsum.photos')).slice(0,4).map((item, index) => (
                    <HomeNewsCard 
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        </div>

        <div className='md:w-[300px] flex flex-col space-y-5'>
            <h3 date-aos="slide-up" className='flex items-center pb-3 space-x-3 border-b-2 border-black'>
                <TfiAnnouncement size={30} color='black' />
                <span className='text-xl font-medium md:text-2xl'>Announcements</span>
            </h3>

            <div className='flex flex-col space-y-4'>
                {news?.filter((item: NewsType) => item.images[0].includes('picsum.photos')).slice(0,8).map((item, index) => (
                    <AnnoncementCard
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default HomeNews