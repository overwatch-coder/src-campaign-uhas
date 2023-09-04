import React from 'react'
import { MdRssFeed } from 'react-icons/md'
import { TfiAnnouncement } from 'react-icons/tfi'
import { vaMidzo, vaMidzo1, vaMidzo2, gallery32, gallery36, vaMidzo3, vaMidzo4, gallery37 } from '@/assets'

import HomeNewsCard from './HomeNewsCard'
import AnnoncementCard from './AnnoncementCard'

const HomeNews = async (): Promise<any>  => {
    const news: NewsType[] = [
        {
            id: 1,
            images: gallery32,
            description: "#vaMidzo",
            title: "#Hope#Change#Action",
            category:  {
                id:  1,
                name: "#vaMidzo", 
                image: gallery32,
            } 
        },
        {
            id: 2,
            images: gallery36,
            description: "#vaMidzo",
            title: "Security Tips",
            category:  {
                id:  1,
                name: "#vaMidzo", 
                image: gallery36,
            } 
        },
        {
            id: 3,
            images: gallery37,
            description: "#vaMidzo",
            title: "Intent Declaration",
            category:  {
                id:  1,
                name: "#vaMidzo", 
                image: gallery37,
            } 
        },
        {
            id: 4,
            images: vaMidzo,
            description: "#vaMidzo",
            title: "Action",
            category:  {
                id:  1,
                name: "#vaMidzo", 
                image: vaMidzo,
            } 
        },
        {
            id: 5,
            images: vaMidzo1,
            description: "#vaMidzo",
            title: "Change",
            category:  {
                id:  1,
                name: "#vaMidzo", 
                image: vaMidzo1,
            } 
        },
       {
            id: 6,
            images: vaMidzo3,
            description: "#vaMidzo",
            title: "Hope, Change, Action",
            category:  {
                id:  1,
                name: "vaMidzo", 
                image: vaMidzo3,
            } 
        },
       {
            id: 7,
            images: vaMidzo4,
            description: "#vaMidzo",
            title: "Action",
            category:  {
                id:  1,
                name: "#vaMidzo", 
                image: vaMidzo4,
            } 
        },
    ];
    
  return (
    <section className='flex flex-col px-10 pt-10 pb-16 space-y-5 bg-bg-primary md:flex-row md:justify-between md:space-y-0 md:space-x-10 overflow-hidden'>
        <div className='flex flex-col flex-1 space-y-5'>
            <h3 date-aos="slide-up" className='flex items-center pb-3 space-x-3 border-b-2 border-black'>
                <MdRssFeed size={30} color='black' />
                <span className='text-xl font-medium md:text-2xl'>Latest News</span>
            </h3>

            <div className='grid grid-cols-1 gap-10 mx-auto md:grid-cols-2'>
                {news.map((item: NewsType) => (
                    <HomeNewsCard 
                        key={item.id}
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
                {news.map((item: NewsType) => (
                    <AnnoncementCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default HomeNews