import Layout from "@/components/Layout";
import Banner from "@/components/banner";

const Home = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='text-center py-5'>
          <Banner
            image='/img/banner/ambe.jpg'
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
