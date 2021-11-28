import Layout from "@/components/Layout";
import Banner from "@/components/banner";
import Headline from "@/components/title";
import HeroWidgets from "@/components/widgets/hero-widgets";

const Home = () => {
  return (
    <Layout>
      <div className='container'>
        <section className='text-center py-5 border-b-2'>
          <Banner
            image='/img/banner/ambe.jpg'
            width='1230'
            height='100'
            alt='Ambe Cement'
          />
        </section>
        <section className=''>
          <HeroWidgets />
        </section>
        <section className='mt-10 pb-10 border-b-2'>
          <Headline title='समाचार' headlineLink='/news' />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
