import Link from "next/link";

const Layout = ({ children }) => (
  <div className="min-vh-100 bg-white text-dark font-sans">
    {/* Header */}
    <header className="bg-warning text-dark py-3 px-4 px-md-5 shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <div className="fs-4 fw-bold">IFA Website</div>

        <nav className="d-flex gap-3 small fw-semibold">
          <Link href="#" className="text-decoration-none link-dark hover-underline">Home</Link>
          <Link href="#services" className="text-decoration-none link-dark hover-underline">Services</Link>
          <Link href="#about" className="text-decoration-none link-dark hover-underline">About Us</Link>
          <Link href="#resources" className="text-decoration-none link-dark hover-underline">Resources</Link>
          <Link href="#contact" className="text-decoration-none link-dark hover-underline">Contact Us</Link>
        </nav>
      </div>
    </header>

    {/* Main Content */}
    <main className="py-4 px-3 px-md-5">{children}</main>

    {/* Footer */}
    <footer className="text-center py-4 small text-muted border-top">
      © 2025 IFA Website. All rights reserved.
    </footer>
  </div>
);

export default Layout;
