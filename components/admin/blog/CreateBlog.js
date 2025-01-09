import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "@/actions/auth";
import { getAllCategories } from "@/actions/category";
import { getAllTags } from "@/actions/tags";
import { createBlog } from "@/actions/blog";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { QuillModules, QuillFormats } from "helpers/react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const CreateBlog = () => {
  const blogFromLS = () => {
    if (typeof window === "undefined") {
      return false;
    }

    if (localStorage.getItem("blog")) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };

  const [body, setBody] = useState(blogFromLS());
  const [values, setValues] = useState({
    sizeError: "",
    formData: "",
    title: "",
    hidePublishButton: false,
  });

  const { title, formData, sizeError, hidePublishButton } = values;
  const token = getCookie("token");

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const submitBlog = (e) => {
    e.preventDefault();
    createBlog(formData, token).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
        toast.error(data.error);
      } else {
        setValues({
          ...values,
          title: "",
        });
        setBody("");
        toast.success("Blog is created");
      }
    });
  };

  const handleChange = (name) => (e) => {
    //     console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData });
  };

  const handleBody = (e) => {
    setBody(e);
    formData.set("body", e);

    if (typeof window !== "undefined") {
      localStorage.setItem("blog", JSON.stringify(e));
    }
  };

  return (
    <>
      <div className='w-full mt-5 flex flex-row justify-between'>
        <div className='w-4/5 mr-5'>
          <h2 className='text-2xl font-semibold font-fontH tracking-wide'>
            Add Blog
          </h2>
          <div className='pt-5'>
            <form onSubmit={submitBlog}>
              <input
                type='text'
                className='w-full py-3 px-5 border focus:outline-none shadow-sm rounded-md'
                value={title}
                onChange={handleChange("title")}
                placeholder='Add Title'
                required
              />
              <ReactQuill
                modules={QuillModules}
                formats={QuillFormats}
                value={body}
                placeholder='Write something amazing...'
                onChange={handleBody}
                required
              />
              <button
                type='submit'
                className='mt-5 py-2 px-5 rounded-md bg-red-700 text-white text-lg capitalize font-fontH'
              >
                Publish
              </button>
            </form>
          </div>
        </div>
        <div className='w-1/5 ml-5'>
          <h2 className='text-2xl font-semibold font-fontH tracking-wide'>
            All Categories
          </h2>

          <div className=''>
            {/* {categories.map((cat) => {
              return (
                <button
                  key={cat._id}
                  className='m-4 py-2 px-5 rounded-md bg-red-700 text-white text-lg capitalize font-fontH'
                >
                  {cat.name}
                </button>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
