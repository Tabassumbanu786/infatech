// src/app/Components/industries/financial-advisors/layout.js


import Link from "next/link";


const Layout = ({ children }) => (
  <div className="min-h-screen bg-white text-gray-800 font-sans">
    <header className="bg-yellow-400 text-gray-900 py-4 px-6 md:px-12 shadow">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide">IFA Website</div>

        <nav className="space-x-6 text-sm font-semibold">
          <Link href="/" className="hover:underline hover:text-gray-800">Home</Link>
          <Link href="/#services" scroll={false} className="hover:underline hover:text-gray-800">Services</Link>
          <Link href="/#about" scroll={false} className="hover:underline hover:text-gray-800">About Us</Link>
          <Link href="/resources" className="hover:underline hover:text-gray-800">Resources</Link>
          <Link href="#contact" className="hover:underline hover:text-gray-800">Contact Us</Link>
        </nav>
      </div>
    </header>

    <main className="py-8 px-4 md:px-12">{children}</main>

    <footer className="text-center py-6 text-sm text-gray-500 border-t">
      © 2025 IFA Website. All rights reserved.
    </footer>
  </div>
);

export default Layout;
