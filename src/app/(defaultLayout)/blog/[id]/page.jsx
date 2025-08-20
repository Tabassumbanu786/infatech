@@ .. @@
 // app/blog/[id]/page.js
 import BlogDetail from '../../../components/BlogDetail/BlogDetail';
-// import data from '@/app/Data/blog.json';
-import data from '../../../Data/blog.json';

+async function getBlogPost(id) {
+  try {
+    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog-posts/${id}`, {
+      cache: 'no-store' // Ensure fresh data
+    });
+    
+    if (!response.ok) {
+      return null;
+    }
+    
+    return await response.json();
+  } catch (error) {
+    console.error('Error fetching blog post:', error);
+    return null;
+  }
+}

-export default function Page({ params }) {
-  const blog = data.find((item) => item.id === params.id);
+export default async function Page({ params }) {
+  const blog = await getBlogPost(params.id);

   if (!blog) return <div className='container py-5'>Blog not found</div>;
@@ .. @@
 }

 // Required for static generation of dynamic routes
-export async function generateStaticParams() {
-  return data.map((item) => ({ id: item.id }));
-}