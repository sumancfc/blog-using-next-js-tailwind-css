import Image from "next/image";
import Link from "next/link";
import { ClockIcon, ChatAltIcon } from "@heroicons/react/24/outline";

const HeroWidgets = () => {
  const articles = [
    {
      id: "1",
      title: "जाजरकोटमा बस दुर्घटना हुँदा ५ जनाको मृत्यु, २५ जना घाइते",
      link: "/hello",
      postedBy: "अनलाइनखबर",
      profile: "/img/logo/ok-icon.png",
      createdAt: "५ मिनेट अगाडि",
      totalComment: "0",
      articleImage: "/img/news/poverty.png",
    },
    {
      id: "2",
      title: "एमाले महाधिवेशनमा मौन पूर्वमाओवादी नेताहरु",
      link: "/hello-2",
      postedBy: "अनलाइनखबर",
      profile: "/img/logo/ok-icon.png",
      createdAt: "५ मिनेट अगाडि",
      totalComment: "5",
      articleImage: "/img/news/hero1.jpg",
    },
    {
      id: "3",
      title: "जाजरकोटमा बस दुर्घटना हुँदा ५ जनाको मृत्यु, २५ जना घाइते",
      link: "/hello",
      postedBy: "अनलाइनखबर",
      profile: "/img/logo/ok-icon.png",
      createdAt: "५ मिनेट अगाडि",
      totalComment: "0",
      articleImage: "/img/news/poverty.png",
    },
    {
      id: "4",
      title: "एमाले महाधिवेशनमा मौन पूर्वमाओवादी नेताहरु",
      link: "/hello-2",
      postedBy: "अनलाइनखबर",
      profile: "/img/logo/ok-icon.png",
      createdAt: "५ मिनेट अगाडि",
      totalComment: "5",
      articleImage: "/img/news/hero1.jpg",
    },
  ];
  return (
    <section id='hero-widget'>
      {articles.slice(0, 3).map((article) => {
        const {
          id,
          title,
          link,
          postedBy,
          profile,
          createdAt,
          totalComment,
          articleImage,
        } = article;
        return (
          <div className='mt-10 pb-10 border-b-2' key={id}>
            <h2 className='text-center'>
              <Link href={link} className='text-7xl font-semibold leading-snug'>
                {title}
              </Link>
            </h2>
            <div className='flex items-center justify-center space-x-8'>
              <div className='flex items-center'>
                <Image
                  src={profile}
                  width={60}
                  height={60}
                  className='rounded-full'
                />
                <p className='ml-3'>{postedBy}</p>
              </div>
              <div className='flex items-center'>
                <ClockIcon className='w-8 h-8 text-blue-500 mr-3' />
                <p>{createdAt}</p>
              </div>
              <div className='flex items-center'>
                <ChatAltIcon className='w-8 h-8 text-blue-500 mr-3' />
                <p className='text-blue-500 font-bold text-xl'>
                  {totalComment}
                </p>
              </div>
            </div>
            <div className='mt-4'>
              <Link href={link}>
                <Image
                  className=''
                  src={articleImage}
                  width='1230'
                  height='510'
                />
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HeroWidgets;
