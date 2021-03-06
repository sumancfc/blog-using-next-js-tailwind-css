import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import DashboardLayout from "@/components/Layout/Dashboard";
import { getCookie } from "@/actions/auth";
import { createCategory, getAllCategories } from "@/actions/category";
import Admin from "@/components/admin/Admin";

const Category = () => {
  const [values, setValues] = useState({
    name: "",
    slug: "",
    categories: [],
    reload: false,
  });

  const { name, slug, categories, reload } = values;

  const token = getCookie("token");

  useEffect(() => {
    loadCategories();
  }, [reload]);

  const loadCategories = () => {
    getAllCategories()
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setValues({ ...values, categories: data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickSubmit = (e) => {
    e.preventDefault();

    createCategory({ name, slug }, token).then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setValues({
          ...values,
          name: "",
          slug: "",
          reload: !reload,
        });
        toast.success(`${name} is created.`);
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  return (
    <DashboardLayout>
      <Admin>
        <h1 className='text-3xl font-bold font-fontH tracking-wide'>
          Category
        </h1>
        <div className='w-full mt-5 flex flex-row justify-between'>
          <div className='w-2/5 mr-5'>
            <h2 className='text-2xl font-semibold font-fontH tracking-wide'>
              Add category
            </h2>
            <div className='pt-5'>
              <form onSubmit={clickSubmit}>
                <input
                  type='text'
                  className='w-full py-3 px-5 border focus:outline-none shadow-sm rounded-md'
                  value={name}
                  onChange={handleChange("name")}
                  placeholder='Add Category'
                  required
                />
                <input
                  type='text'
                  className='w-full py-3 px-5 border focus:outline-none shadow-sm rounded-md'
                  value={slug}
                  onChange={handleChange("slug")}
                  placeholder='Add Slug'
                  required
                />
                <button
                  type='submit'
                  className='mt-5 py-2 px-5 rounded-md bg-red-700 text-white text-lg capitalize font-fontH'
                >
                  Add Category
                </button>
              </form>
            </div>
          </div>
          <div className='w-3/5 ml-5'>
            <h2 className='text-2xl font-semibold font-fontH tracking-wide'>
              All Categories
            </h2>

            <div className=''>
              {categories.map((cat) => {
                return (
                  <button
                    key={cat._id}
                    className='m-4 py-2 px-5 rounded-md bg-red-700 text-white text-lg capitalize font-fontH'
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Admin>
    </DashboardLayout>
  );
};

export default Category;
