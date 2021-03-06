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
                <Link href='/'>
                  <a>होमपेज</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>समाचार</a>
                </Link>
                <ul></ul>
              </li>
              <li>
                <Link href='/'>
                  <a>विजनेस</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>जीवनशैली</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>मनोरन्जन</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>विचार</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>प्रवास</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>खेलकुद</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>अन्य</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* Right Menu */}

          <div>
            <ul className='flex flex-row space-x-4'>
              {!isAuth() && (
                <>
                  <li>
                    <Link href='/signin'>
                      <a>Sign In</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/signup'>
                      <a>Sign Up</a>
                    </Link>
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
