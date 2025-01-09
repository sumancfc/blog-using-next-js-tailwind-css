import Link from "next/link";
import Image from "next/image";
import Banner from "../banner";
import Headline from "../title";

const NewsWidget = () => {
  const articles = [
    {
      id: "1",
      title: "जाजरकोटमा बस दुर्घटना हुँदा ५ जनाको मृत्यु, २५ जना घाइते",
      link: "/hello",
      articleImage: "/img/news/bhim.jpg",
    },
    {
      id: "2",
      title: "एमाले महाधिवेशनमा मौन पूर्वमाओवादी नेताहरु",
      link: "/hello-2",
      articleImage: "/img/news/hero1.jpg",
    },
    {
      id: "3",
      title: "जाजरकोटमा",
      link: "/hello",
      articleImage: "/img/news/bhim.jpg",
    },
    {
      id: "4",
      title: "एमाले महाधिवेशनमा मौन पूर्वमाओवादी नेताहरु",
      link: "/hello-2",
      articleImage: "/img/news/bhim.jpg",
    },
    {
      id: "5",
      title: "जाजरकोटमा बस दुर्घटना हुँदा ५",
      link: "/hello",
      articleImage: "/img/news/poverty.png",
    },
    {
      id: "6",
      title: "एमाले महाधिवेशनमा ",
      link: "/hello-2",
      articleImage: "/img/news/hero1.jpg",
    },
    {
      id: "7",
      title: "जामहाधिवेशनमा",
      link: "/hello",
      articleImage: "/img/news/poverty.png",
    },
    {
      id: "8",
      title: "एमाले महाधिवेशनमा मौन नेताहरु",
      link: "/hello-2",
      articleImage: "/img/news/bhim.jpg",
    },
    {
      id: "9",
      title: "एमाले महाधिवेशनमा मौन पूर्वमाओवादी नेताहरु",
      link: "/hello-2",
      articleImage: "/img/news/bhim.jpg",
    },
    {
      id: "10",
      title: "एमाले महाधिवेशनमा मौन पूर्वमाओवादी नेताहरु",
      link: "/hello-2",
      articleImage: "/img/news/bhim.jpg",
    },
    {
      id: "11",
      title:
        "एमाले महाधिवेशनमा मौन पूर्वमाओवादी एमाले महाधिवेशनमा मौन पूर्वमाओवादी एमाले",
      link: "/hello-2",
      articleImage: "/img/news/bhim.jpg",
    },
  ];
  return (
    <section className='flex w-full py-10 border-b-2' id='news-widget'>
      <div className='w-9/12 mr-10'>
        <>
          <Headline title='समाचार' headlineLink='/news' />
          {articles.slice(0, 1).map((article) => {
            const { id, title, desc, link, articleImage } = article;
            return (
              <div
                className='flex justify-between items-center bg-gray-200 mt-6'
                key={id}
              >
                <div className='w-1/2'>
                  <Link href={link}>
                    <a>
                      <Image
                        src={articleImage}
                        width='430'
                        height='415'
                        // objectFit='cover'
                        // layout='responsive'
                      />
                    </a>
                  </Link>
                </div>
                <div className='ml-10 w-1/2'>
                  <h3 className='pr-24'>
                    <Link href={link}>
                      <a className='text-4xl font-fontM font-semibold leading-normal'>
                        {title}
                      </a>
                    </Link>
                  </h3>
                  <p className='mt-5 text-lg font-medium leading-normal pr-10'>
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </>
        <div className='mt-5 mb-5'>
          <Banner
            image='/img/banner/900.gif'
            width='888'
            height='100'
            alt='Ambe Cement'
          />
        </div>
        <div className='flex flex-row flex-wrap '>
          {articles.slice(1, 9).map((article) => {
            const { id, title, link, articleImage } = article;
            return (
              <div className='w-1/2 flex mb-5' key={id}>
                <Link href={link} legacyBehavior>
                  <a className='flex flex-auto'>
                    <img src={articleImage} className='w-1/3' />
                    <h3 className='ml-6 mr-3 text-xl font-fontM font-semibold leading-normal'>
                      {title}
                    </h3>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className='w-3/12'>
        <div className='py-4'>
          <Banner
            image='/img/banner/300-150.gif'
            width='300'
            height='150'
            alt='Ambe Cement'
          />
        </div>
        <div className='py-4'>
          <Banner
            image='/img/banner/300-200.gif'
            width='300'
            height='200'
            alt='Ambe Cement'
          />
        </div>
        <div className='py-4'>
          <Banner
            image='/img/banner/300-150.gif'
            width='300'
            height='150'
            alt='Ambe Cement'
          />
        </div>
        <div className='py-4'>
          <Banner
            image='/img/banner/300-200.gif'
            width='300'
            height='200'
            alt='Ambe Cement'
          />
        </div>
        <div className='py-4'>
          <Banner
            image='/img/banner/300-200.gif'
            width='300'
            height='200'
            alt='Ambe Cement'
          />
        </div>
      </div>
    </section>
  );
};

export default NewsWidget;
