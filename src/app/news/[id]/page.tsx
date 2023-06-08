'use client'
import { FetchNews } from '@/app/utils';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, {useEffect, useState} from 'react'
import ContentLoader from 'react-content-loader';

const NewsDetails = () => {
    const {id} = useParams();
    const [news, setNews] = useState<NewsType>({
      id: 0,
      images: [],
      price: 0,
      description: "",
      title: "",
      category: "",
      creationAt: "",
      updatedAt: "",
    });
    
    const [allNews, setAllNews] = useState<NewsType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchSingleNews = async () => {
        setIsLoading(true);
        const data: NewsType = await FetchNews(`https://api.escuelajs.co/api/v1/products`, parseInt(id));
        setNews(data);
        setIsLoading(false);
      }

      const fetchAllNews = async () => {
        const data: NewsType[] = await FetchNews('https://api.escuelajs.co/api/v1/products');
        setAllNews(data);
      }

      fetchSingleNews();
      fetchAllNews();
    }, [id])

    const remainingNews = allNews?.filter(item => item.id !== news?.id);

  return (
    <>
      <Head>
        <title>{news.title} | JFSRC</title>
      </Head>
      <div className='px-10 pt-20 pb-16 bg-bg-primary'>
        {isLoading ? 
        <ContentLoader /> 
        : 
        <section className='flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between md:space-x-10'>
          {/* Detailed News */}
          <div className='flex flex-col flex-1 space-y-7'>
            <div className='flex flex-col space-y-4'>
              <h2 className='text-xl font-semibold md:text-3xl'>{news.title}</h2>
              <p className='text-black/70'>Published : {news.creationAt.split('T')[0]}</p>
            </div>
            <Image 
              src={news?.images[0]}
              alt={news?.title}
              width={500}
              height={500}
              className='w-full h-[400px] object-cover'
            />

            <p>{news?.description}</p>

            <Image 
              src={news?.images[1]}
              alt={news?.title}
              width={500}
              height={500}
              className='w-full h-[400px] object-cover'
            />
          </div>

          {/* More News */}
          <div className='w-full md:w-[300px] flex flex-col space-y-5'>
            <h2 className='text-xl font-medium text-black underline md:text-2xl'>More News</h2>
            {remainingNews.slice(0,10).map((item, index) => (
              <section key={index} data-aos="zoom-in" className='flex items-center w-full px-5 py-2 space-x-4 bg-white rounded shadow'>
                <div className='flex flex-col space-x-1 cursor-pointer'>
                    <Link className='font-medium text-blue-main hover:text-red-main' href={`/news/${item.id}`}>
                        {item.title}
                    </Link>
                    <p className='text-xs text-black/60'>{item.description.slice(0,50)}...</p>
                </div>
              </section>
            ))}
          </div>
        </section>
        }
      </div>
    </>
  )
}

export default NewsDetails