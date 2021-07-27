import SocialIcons from "../social-icons";
import Trending from "../trending";

const TopHeader = () => {
  return (
    <div className='bg-white py-1 border-b border-dashed'>
      <div className='container'>
        <div className='grid grid-cols-4 gap-6'>
          <div className='col-span-3'>
            <Trending />
          </div>
          <div className='col-span-1'>
            <div className='flex justify-between items-center'>
              <p className='text-sm opacity-75'>Thursday, March 26, 2020</p>
              <span>|</span>

              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
