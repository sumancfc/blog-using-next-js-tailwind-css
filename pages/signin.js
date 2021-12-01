import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { signin, authenticate, isAuth } from "../actions/auth";

const SigninPage = () => {
  const [values, setValues] = useState({
    email: "sumanstha999@gmail.com",
    password: "suman9",
  });

  const { email, password } = values;

  const router = useRouter();

  useEffect(() => {
    isAuth() && router.push("/");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
        toast.error(data.error);
      } else {
        // save user token to cookie
        // save user info to localstorage
        // authenticate user
        authenticate(data, () => {
          toast.success("Signin Success");
          if (isAuth() && isAuth().role === 1) {
            router.push(`/admin`);
          } else {
            router.push(`/`);
          }
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  return (
    <div className='container bg-red-200' id='signup'>
      <div className='p-24 shadow-lg'>
        <h1 className='text-5xl font-fontH font-bold tracking-wide text-center'>
          Signin Here
        </h1>

        <div className='mt-5'>
          <form onSubmit={handleSubmit}>
            <div className='space-y-5 font-fontH'>
              <input
                type='email'
                className='w-full py-3 px-5 border focus:outline-none shadow-sm rounded-md'
                value={email}
                onChange={handleChange("email")}
                placeholder='Enter your Email'
                required
              />
              <input
                type='password'
                className='w-full py-3 px-5 border focus:outline-none shadow-sm rounded-md'
                value={password}
                onChange={handleChange("password")}
                placeholder='Enter your Password'
                required
              />
              <button className='py-2 px-5 rounded-md bg-red-700 text-white text-lg capitalize font-fontH'>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
