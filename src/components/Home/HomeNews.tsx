import React from 'react'
import { MdRssFeed } from 'react-icons/md'
import { TfiAnnouncement } from 'react-icons/tfi'
import { vaMidzo, vaMidzo1, vaMidzo2, gallery32, gallery36, vaMidzo3, vaMidzo4, gallery37, vice, vetting } from '@/assets'

import HomeNewsCard from './HomeNewsCard'
import AnnoncementCard from './AnnoncementCard'

const HomeNews = async (): Promise<any>  => {
    const news: NewsType[] = [
        {
            id: 1,
            images: vetting,
            description: "We topped the vetting and the panel found us the most competent of all. ",
            title: "#Hope#Change#Action",
            category:  {
                id:  1,
                name: "#vaMidzo", 
                image: vetting,
            } 
        },
        {
            id: 2,
            images: vice,
            description: `As Assistant Class Rep and Assistant Secretary for
the Physiotherapy Students Association, UHAS,I
have witnessed the challenges we faced on our
educational journey.
Now, in my 3rd year, I'm declaring my intent to be
the next SRC Vice President. With my passion,
your support and prayers, we will embark on this
journey together, turning our aspirations into
reality Let's breathe life into our dreams, ignite
transformation, and forge a brighter future.
#VaMidzo #Hope #Change #Action`,
            title: "#Hope#Change#Action",
            category:  {
                id:  1,
                name: "#vaMidzo", 
                image: vice,
            } 
        },
        {
            id: 3,
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
            id: 4,
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
            id: 5,
            images: gallery37,
            description: "#vaMidzo",
            title: "Intent Declaration",
            category:  {
                id:  1,
                name: `During my first year as Class Secretary, we were promised
a change in the system by a group of people who provided
us with past questions to vote for them. However, we lived
our 2nd year in complete disappointment paying for our
naivety.
In my third year as UHAS Debate Sociely Vice President, I
witnessed the student body being neglected when it came
to engagement and extracurricular activities. Then, as
Chief Justice in my fourth year, I closely observed the sys-
tems in place and understood firsthand the reasons
behind the ongoing struggles faced by the student body.
My name is Weitzmann Eziel Johnson, a 5th-year Doctor of
Pharmacy student, and 1 am officially declaring my intent to
run for the position of FEDERAL SRC PRESIDENT. Like
many students of this university, I am tired ofthe
continuous failed and dormant promises of student
leaders to do things right which is why for us, VaMiDzo is a
call for people who are tired of the illusion of HOPE, who
believe that CHANGE must come now, and that the time
has come to take ACTION.
Join this revolution with your support, your action and your
prayers. Together let us revive hope, call for
change, demonstrate Action.`, 
                image: gallery37,
            } 
        },
        {
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
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