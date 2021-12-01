import { useEffect } from "react";
import { useRouter } from "next/router";
import { isAuth } from "../../actions/auth";
import SideNav from "../dashboard/SideNav";
import Logo from "../logo";

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuth()) {
      router.push("/signin");
    } else if (isAuth().role !== 1) {
      router.push("/");
    }
  }, []);

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
        <div className='col-span-4 p-6'></div>
      </div>
    </>
  );
};

export default DashboardLayout;
