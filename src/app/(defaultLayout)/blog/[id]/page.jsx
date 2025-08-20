import BlogDetail from '../../../components/BlogDetail/BlogDetail';
  try {
async function getBlogPost(id) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog-posts/${id}`, {
      cache: 'no-store' // Ensure fresh data
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog-posts/${id}`, {
      cache: 'no-store' // Ensure fresh data
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
export default async function Page({ params }) {
  const blog = await getBlogPost(params.id);

  if (!blog) return <div className='container py-5'>Blog not found</div>;

  return <BlogDetail blog={blog} />;