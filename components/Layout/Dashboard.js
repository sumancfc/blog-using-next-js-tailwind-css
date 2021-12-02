import SideNav from "../dashboard/SideNav";
import Logo from "../logo";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className='bg-blog-black py-1 flex justify-between items-center'>
        <div className='ml-10'>
          <Logo />
        </div>

        <div>
          <div className='w-10 mr-10'>
            <img
              src='/img/logo/ok-icon.png'
              alt='user profile'
              className='rounded cursor-pointer'
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-6'>
        <div className='col-span-1'>
          <SideNav />
        </div>
        <div className='col-span-4 p-6'>{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
