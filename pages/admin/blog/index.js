import Admin from "@/components/admin/Admin";
import CreateBlog from "@/components/admin/blog/CreateBlog";
import DashboardLayout from "@/components/Layout/Dashboard";

const Blog = () => {
  return (
    <DashboardLayout>
      <Admin>
        <h1 className='text-3xl font-bold font-fontH tracking-wide'>Blogs</h1>
        <CreateBlog />
      </Admin>
    </DashboardLayout>
  );
};

export default Blog;
