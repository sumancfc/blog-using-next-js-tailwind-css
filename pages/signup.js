import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../config";
import { Context } from "context";

const SignupPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;

  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${API}/signup`, {
        name,
        email,
        password,
      });
      toast.success(data.message);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  return (
    <div className='container bg-red-200' id='signup'>
      <div className='p-24 shadow-lg'>
        <h1 className='text-5xl font-fontH font-bold tracking-wide text-center'>
          Signup Here
        </h1>

        <div className='mt-5'>
          <form onSubmit={handleSubmit}>
            <div className='space-y-5 font-fontH'>
              <input
                type='text'
                className='w-full py-3 px-5 border focus:outline-none shadow-sm rounded-md'
                value={name}
                onChange={handleChange("name")}
                placeholder='Enter your Name'
                required
              />
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
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
