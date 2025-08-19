@@ .. @@
 import React from 'react';
 import Image from 'next/image';
 
 const TemplateGallery = () => {
   const templates = [
     {
       id: 1,
       title: "E-commerce Website",
       category: "Business",
-      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
+      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
       description: "Modern e-commerce solution with payment integration"
     },
     {
       id: 2,
       title: "Portfolio Website",
       category: "Creative",
-      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
+      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
       description: "Clean and professional portfolio design"
     },
     {
       id: 3,
       title: "Restaurant Website",
       category: "Food & Beverage",
-      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
+      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
       description: "Appetizing restaurant website with online ordering"
     },
     {
       id: 4,
       title: "Corporate Website",
       category: "Business",
-      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
+      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
       description: "Professional corporate website design"
     },
     {
       id: 5,
       title: "Blog Website",
       category: "Content",
-      image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
+      image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=600",
       description: "Engaging blog design with content management"
     },
     {
       id: 6,
       title: "Healthcare Website",
       category: "Healthcare",
-      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
+      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",
       description: "Medical practice website with appointment booking"
     }
   ];
 
   return (
-    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
-      <div className="container">
-        <div className="row mb-5">
-          <div className="col-12 text-center">
-            <h2 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50' }}>
+    <section className="py-12 md:py-16 bg-gray-50">
+      <div className="container mx-auto px-4">
+        <div className="text-center mb-12">
+          <div className="max-w-3xl mx-auto">
+            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
               Template Gallery
             </h2>
-            <p className="lead text-muted">
+            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
               Explore our collection of professionally designed website templates
             </p>
           </div>
         </div>
-        
-        <div className="row g-4">
+
+        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           {templates.map((template) => (
-            <div key={template.id} className="col-lg-4 col-md-6">
-              <div className="card h-100 shadow-sm border-0" style={{ transition: 'transform 0.3s ease' }}>
-                <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
+            <div key={template.id} className="group">
+              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
+                <div className="relative overflow-hidden aspect-video">
                   <Image
                     src={template.image}
                     alt={template.title}
-                    fill
-                    className="object-cover"
-                    style={{ transition: 'transform 0.3s ease' }}
+                    width={600}
+                    height={400}
+                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
+                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                   />
-                  <div className="position-absolute top-0 start-0 m-3">
-                    <span className="badge text-white px-3 py-2" style={{ backgroundColor: '#ff3b00' }}>
+                  <div className="absolute top-4 left-4">
+                    <span className="bg-brand text-white px-3 py-1 rounded-full text-sm font-medium">
                       {template.category}
                     </span>
                   </div>
                 </div>
-                <div className="card-body p-4">
-                  <h5 className="card-title fw-bold mb-3" style={{ color: '#2c3e50' }}>
+                
+                <div className="p-6">
+                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-brand transition-colors duration-300">
                     {template.title}
-                  </h5>
-                  <p className="card-text text-muted mb-4">
+                  </h3>
+                  <p className="text-gray-600 mb-4 leading-relaxed">
                     {template.description}
                   </p>
-                  <div className="d-flex justify-content-between align-items-center">
-                    <button className="btn text-white fw-semibold px-4 py-2" style={{ backgroundColor: '#ff3b00' }}>
+                  
+                  <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
+                    <button className="bg-brand hover:bg-brand-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 w-full sm:w-auto">
                       View Demo
                     </button>
-                    <button className="btn btn-outline-secondary">
+                    <button className="border-2 border-gray-300 hover:border-brand hover:text-brand text-gray-700 font-semibold px-6 py-2 rounded-lg transition-all duration-300 w-full sm:w-auto">
                       Get Template
                     </button>
                   </div>
@@ -1,7 +1,7 @@
         </div>
         
-        <div className="row mt-5">
-          <div className="col-12 text-center">
-            <button className="btn btn-lg text-white fw-semibold px-5 py-3" style={{ backgroundColor: '#ff3b00' }}>
+        <div className="text-center mt-12">
+          <div className="max-w-md mx-auto">
+            <button className="bg-brand hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 w-full sm:w-auto">
               View All Templates
             </button>
           </div>