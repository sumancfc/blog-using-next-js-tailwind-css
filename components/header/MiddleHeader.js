import Banner from "../banner";
import Logo from "../logo";

const MiddleHeader = () => {
  return (
    <div className='bg-white py-2.5'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div>
            <Logo />
          </div>
          <div>
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
