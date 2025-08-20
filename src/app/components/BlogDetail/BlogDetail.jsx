@@ .. @@
-// Components/BlogDetail/BlogDetail.js
 'use client';
 import Image from 'next/image';
@@ .. @@
               <div
                 className="blog-details-desc"
-                dangerouslySetInnerHTML={{ __html: blog.content }}
+                dangerouslySetInnerHTML={{ __html: blog.content }}
               />
@@ .. @@
             <div className="blog-details-category">
             <br></br>
-              {blog.category.map((cat, i) => (
)
)
}
+              {(Array.isArray(blog.category) ? blog.category : []).map((cat, i) => (
                 <span key={i}>
@@ .. @@
                                 <div className="widget-sidber">
                                     <div className="widget-sidber-content">
-                                        <h4>Tags</h4>
+                                        <h4>Categories</h4>
                                     </div>	
                                     <div className="widget-catefories-tags">
-                                    {blog.category.map((cat, i) => (
                 )
                 )
                 }
)
)
}
+                                    {(Array.isArray(blog.category) ? blog.category : []).map((cat, i) => (
                                     <span key={i}><Link href="#">{cat}</Link>
)
)
}