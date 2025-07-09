// app/blog/[id]/page.js
import BlogDetail from '../../../components/BlogDetail/BlogDetail';
// import data from '@/app/Data/blog.json';
import data from '../../../Data/blog.json';




export default function Page({ params }) {
  const blog = data.find((item) => item.id === params.id);

  if (!blog) return <div className='container py-5'>Blog not found</div>;

  return (
    <div className='blog-detail'>
      {/* <BreadCumb Title="Blog Details" /> */}
      <BlogDetail blog={blog} />
    </div>
  );
}

// Required for static generation of dynamic routes
export async function generateStaticParams() {
  return data.map((item) => ({ id: item.id }));
}
