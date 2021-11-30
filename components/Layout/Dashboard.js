import { useContext, useEffect } from "react";
import SideNav from "../dashboard/SideNav";
import Logo from "../logo";
import { Context } from "../../context";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }) => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/");
    }
  }, [user]);

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
        <div className='col-span-4 p-6'>{JSON.stringify(user)}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
