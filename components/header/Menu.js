import Link from "next/link";

const Menu = () => {
  return (
    <nav className='bg-blog-blue py-4 text-white'>
      <div className='container'>
        {/* Left Menu */}
        <div>
          <ul className='flex items-center font-bold text-xl space-x-12 tracking-wide'>
            <li className='flex items-center'>
              <Link href='/'>
                <a className=''>होमपेज</a>
              </Link>
            </li>
            <li className='flex items-center'>
              <Link href='/'>
                <a className=''>समाचार</a>
              </Link>
              <ul></ul>
            </li>
            <li className='flex items-center'>
              <Link href='/'>
                <a className=''>विजनेस</a>
              </Link>
            </li>
            <li className='flex items-center'>
              <Link href='/'>
                <a className=''>जीवनशैली</a>
              </Link>
            </li>
            <li className='flex items-center'>
              <Link href='/'>
                <a className=''>मनोरन्जन</a>
              </Link>
            </li>
            <li className='flex items-center'>
              <Link href='/'>
                <a className=''>विचार</a>
              </Link>
            </li>
            <li className='flex items-center'>
              <Link href='/'>
                <a className=''>प्रवास</a>
              </Link>
            </li>
            <li className='flex items-center'>
              <Link href='/'>
                <a className=''>खेलकुद</a>
              </Link>
            </li>
            <li className='flex items-center'>
              <Link href='/'>
                <a className=''>अन्य</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Right Menu */}
      </div>
    </nav>
  );
};

export default Menu;
