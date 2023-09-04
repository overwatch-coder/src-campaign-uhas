'use client'
import { FetchNews } from '@/app/utils';
import { gallery32, gallery36, gallery37, vaMidzo, vaMidzo1, vaMidzo3, vaMidzo4 } from '@/assets';
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
        images: gallery32,
        description: "#vaMidzo",
        title: "#Hope#Change#Action",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: gallery32,
        }
    }],
    [2, {
        id: 2,
        images: gallery36,
        description: "#vaMidzo",
        title: "Security Tips",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: gallery36,
        }
    }],
    [3, {
        id: 3,
        images: gallery37,
        description: "#vaMidzo",
        title: "Intent Declaration",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: gallery37,
        }
    }],
    [4, {
        id: 4,
        images: vaMidzo,
        description: "#vaMidzo",
        title: "Action",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: vaMidzo,
        }
    }],
    [5, {
        id: 5,
        images: vaMidzo1,
        description: "#vaMidzo",
        title: "Change",
        category: {
            id: 1,
            name: "#vaMidzo",
            image: vaMidzo1,
        }
    }],
    [6, {
        id: 6,
        images: vaMidzo3,
        description: "#vaMidzo",
        title: "Hope, Change, Action",
        category: {
            id: 1,
            name: "vaMidzo",
            image: vaMidzo3,
        }
    }],
    [7, {
        id: 7,
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
              <div className='flex flex-col space-y-4'>
                <h2 className='text-xl font-semibold md:text-3xl'>{newsItem.title}</h2>
              </div>
              <Image
                src={newsItem.images}
                alt={newsItem.title}
                width={500}
                height={500}
                className='w-full h-[500px] md:h-[700px] object-contain'
              />

              <p>{newsItem.description}</p>
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