@@ .. @@
 import Link from 'next/link';
-import data from '../../Data/blog.json';
 import Image from 'next/image';
+import { useEffect, useState } from 'react';

-const Blog3 = () => {
+const Blog3 = () => {
+    const [data, setData] = useState([]);
+    const [loading, setLoading] = useState(true);
+
+    useEffect(() => {
+        const fetchBlogPosts = async () => {
+            try {
+                const response = await fetch('/api/blog-posts?published=true');
+                const posts = await response.json();
+                setData(posts);
+            } catch (error) {
+                console.error('Error fetching blog posts:', error);
+                setData([]);
+            } finally {
+                setLoading(false);
+            }
+        };
+
+        fetchBlogPosts();
+    }, []);
+
+    if (loading) {
+        return (
+            <div className="blog-area style-grid">
+                <div className="container">
+                    <div className="text-center py-5">
+                        <div className="spinner-border text-primary" role="status">
+                            <span className="visually-hidden">Loading...</span>
+                        </div>
+                    </div>
+                </div>
+            </div>
+        );
+    }
+
     return (
         <div className="blog-area style-grid">
@@ .. @@
                             <div className="blog-box-content">
                             <div className="meta-blog">
-                                <Link href="/blog/blog-details"><span><i className="bi bi-person-plus"></i>{item.author} </span></Link>
+                                <Link href={`/blog/${item.id}`}><span><i className="bi bi-person-plus"></i>{item.author} </span></Link>
                                 <p><span>
@@ .. @@
                                 <div className="blog-button">
-                                <Link href={`/blog/${item.id}`}>READ MORE<i className="bi bi-arrow-right"></i></Link>
+                                    <Link href={`/blog/${item.id}`}>READ MORE<i className="bi bi-arrow-right"></i></Link>
                                 </div>