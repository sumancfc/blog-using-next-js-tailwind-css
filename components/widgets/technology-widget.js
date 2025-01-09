import Link from "next/link";
import Image from "next/image";
import Headline from "../title";

const TechnologyWidget = () => {
  const articles = [
    {
      id: "1",
      title: "जाजरकोटमा बस दुर्घटना हुँदा ५ जनाको मृत्यु, २५ जना घाइते",
      link: "/hello",
      articleImage: "/img/news/shankar.jpg",
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
  ];
  return (
    <section className='flex w-full py-10 border-b-2' id='technology-widget'>
      <div className='w-full '>
        <Headline title='सूचना-प्रविधि' headlineLink='/technology-news' />

        <div className='flex mt-8 '>
          {articles.slice(0, 4).map((article) => {
            const { id, title, link, articleImage } = article;
            return (
              <div className='h-full mr-7 last:mr-0' key={id}>
                <div className='post-overlay'>
                  <Link href={link} className='relative w-full h-tech block'>
                    <Image
                      src={articleImage}
                      width='288'
                      height='450'
                      alt={title}
                    />
                    <div className='absolute w-full p-7 z-10 left-0 bottom-0'>
                      <h2 className='text-2xl font-semibold font-fontM mb-0 text-white'>
                        {title}
                      </h2>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyWidget;
