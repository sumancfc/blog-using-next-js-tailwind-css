import { isAuth, signout } from "actions/auth";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();
  return (
    <nav className='bg-blog-blue py-4 text-white'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          {/* Left Menu */}
          <div>
            <ul className='flex items-center font-bold text-xl space-x-12 tracking-wide'>
              <li>
                <Link href='/'>होमपेज</Link>
              </li>
              <li>
                <Link href='/'>समाचार</Link>
                <ul></ul>
              </li>
              <li>
                <Link href='/'>विजनेस</Link>
              </li>
              <li>
                <Link href='/'>जीवनशैली</Link>
              </li>
              <li>
                <Link href='/'>मनोरन्जन</Link>
              </li>
              <li>
                <Link href='/'>विचार</Link>
              </li>
              <li>
                <Link href='/'>प्रवास</Link>
              </li>
              <li>
                <Link href='/'>खेलकुद</Link>
              </li>
              <li>
                <Link href='/'>अन्य</Link>
              </li>
            </ul>
          </div>

          {/* Right Menu */}
          <div>
            <ul className='flex flex-row space-x-4'>
              {!isAuth() && (
                <>
                  <li>
                    <Link href='/signin'>Sign In</Link>
                  </li>
                  <li>
                    <Link href='/signup'>Sign Up</Link>
                  </li>
                </>
              )}

              {isAuth() && (
                <li>
                  <a onClick={() => signout(() => router.push("/signin"))}>
                    Sign Out
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
