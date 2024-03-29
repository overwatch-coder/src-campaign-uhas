'use client'
import { FetchNews } from '@/app/utils';
import { gallery32, gallery36, gallery37, vaMidzo, vaMidzo1, vaMidzo3, vaMidzo4, vetting, vice } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, {useEffect, useState} from 'react'
import ContentLoader from 'react-content-loader'

const NewsDetails = () => {
  const { id }: any = useParams();
  const news = new Map<number, NewsType>([
  [1, {
        id: 1,
        images: vetting,
        description: "We topped the vetting and the panel found us the most competent of all. ",
        title: "#Hope#Change#Action",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: vetting,
        }
    }],
    [2, {
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
        category: {
            id: 1,
            name: "#vaMidzo",
            image: vice,
        }
    }],
  [3, {
        id: 3,
        images: gallery32,
        description: "#vaMidzo",
        title: "#Hope#Change#Action",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: gallery32,
        }
    }],
    [4, {
        id: 4,
        images: gallery36,
        description: "#vaMidzo",
        title: "Security Tips",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: gallery36,
        }
    }],
    [5, {
        id: 5,
        images: gallery37,
        description: `During my first year as Class Secretary, we were promised
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
        title: "Intent Declaration",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: gallery37,
        }
    }],
    [6, {
        id: 6,
        images: vaMidzo,
        description: "#vaMidzo",
        title: "Action",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: vaMidzo,
        }
    }],
    [7, {
        id: 7,
        images: vaMidzo1,
        description: "#vaMidzo",
        title: "Change",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: vaMidzo1,
        }
    }],
    [8, {
        id: 8,
        images: vaMidzo3,
        description: "#vaMidzo",
        title: "Hope, Change, Action",
        category: {
            id: 1,
            name: "vaMidzo",
            image: vaMidzo3,
        }
    }],
    [9, {
        id: 9,
        images: vaMidzo4,
        description: "#vaMidzo",
        title: "Action",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: vaMidzo4,
        }
    }]
]);

  const newsItem = id && typeof id === 'string' && news.has(parseInt(id))
    ? news.get(parseInt(id))
    : null;

    const remainingNews = news

  return (
    <>
      <div className='px-10 pt-20 pb-16 bg-bg-primary'>
        <div className='flex items-center mx-auto space-x-2 text-center'>
                <Link href={'/'} className='text-yellow-600 underline hover:text-yellow-800'>Home</Link>
            </div>
        {newsItem && (
          <section className='flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between md:space-x-10'>
            {/* Detailed News */}
            <div className='flex flex-col flex-1 space-y-7'>
              <div className='flex flex-col space-y-4 mt-5'>
                <h2 className='text-xl font-semibold md:text-3xl'>{newsItem.title}</h2>
              </div>
                <Image
                  src={newsItem.images}
                  alt={newsItem.title}
                  // width={500}
                  // height={500}
                  className='w-full h-[500px] md:h-[700px] object-contain'
                />
                <p className='px-10 py-6 rounded-xl bg-white'>{newsItem.description}</p>
            </div>

            {/* More News */}
            <div className='w-full md:w-[300px] flex flex-col space-y-5'>
              <h2 className='text-xl font-medium text-black underline md:text-2xl'>More News</h2>
              {Array.from(remainingNews.values()).filter(item => item.id !== newsItem.id).slice(0, 10).map((item, index) => (
                <section key={index} data-aos="zoom-in" className='flex items-center w-full px-5 py-2 space-x-4 bg-white rounded shadow'>
                  <div className='flex flex-col space-x-1 cursor-pointer'>
                    <Link className='font-medium hover:text-yellow-700 text-yellow-600' href={`/news/${item.id}`}>
                      {item.title}
                    </Link>
                    <p className='text-xs text-black/60'>{item.description.slice(0, 50)}...</p>
                  </div>
                </section>
              ))}
            </div>
          </section>
        )}
      </div>  
    </>
  )
}

export default NewsDetails