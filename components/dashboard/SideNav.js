import { CollectionIcon, HomeIcon } from "@heroicons/react/outline";

const SideNav = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex w-full h-screen max-w-xs p-4 bg-white'>
        <ul className='flex flex-col w-full font-fontH'>
          <li className='my-px'>
            <a
              href='#'
              className='flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100'
            >
              <span className='flex items-center justify-center text-lg text-gray-400'>
                <HomeIcon className='w-6 h-6' />
              </span>
              <span className='ml-3'>Dashboard</span>
              <span className='flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto'>
                3
              </span>
            </a>
          </li>

          <li className='my-px'>
            <a
              href='#'
              className='flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100'
            >
              <span className='flex items-center justify-center text-lg text-gray-400'>
                <CollectionIcon className='w-6 h-6' />
              </span>
              <span className='ml-3'>Categories</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
