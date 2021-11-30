import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../config";
import { Context } from "../context";
import { authenticate, signin } from "actions/auth";

const SigninPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;
  // const {
  //   state: { user },
  //   dispatch,
  // } = useContext(Context);

  // console.log(user);

  const router = useRouter();

  // useEffect(() => {
  //   if (user === null) router.push("/");
  // }, [user]);

  //   logout function
  //   const logout = async () => {
  //     dispatch({ type: "LOGOUT" });
  //     window.localStorage.removeItem("user");
  //     const { data } = await axios.get(`${API}/signout`);
  //     toast.success(data.message);
  //     router.push("/");
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
        toast.error(data.error);
      } else {
        // save user token to cookie
        // save user info to localstorage
        // authenticate user
        authenticate(data, () => {
          toast.success("Signin Success");
          router.push(`/`);
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
