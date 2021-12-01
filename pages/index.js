import Layout from "@/components/Layout";
import Banner from "@/components/banner";
import HeroWidgets from "@/components/widgets/hero-widgets";
import NewsWidget from "@/components/widgets/news-widget";
import TechnologyWidget from "@/components/widgets/technology-widget";

const Home = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='text-center py-5 border-b-2'>
          <Banner
            image='/img/banner/ambe.jpg'
            width='1230'
            height='100'
            alt='Ambe Cement'
          />
        </div>

        <HeroWidgets />

        <div className='text-center py-5 border-b-2'>
          <Banner
            image='/img/banner/ambe.jpg'
            width='1230'
            height='100'
            alt='Ambe Cement'
          />
        </div>

        <NewsWidget />

        <div className='text-center py-5 border-b-2'>
          <Banner
            image='/img/banner/nmb.gif'
            width='1230'
            height='100'
            alt='Ambe Cement'
          />
        </div>

        <TechnologyWidget />

        <div className='text-center py-5 border-b-2'>
          <Banner
            image='/img/banner/nmb.gif'
            width='1230'
            height='100'
            alt='Ambe Cement'
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
