import React from 'react'
import HeaderStyle3 from '../../../infatech-nextjs/src/app/components/Header/HeaderStyle3'
import Footer from '../../../infatech-nextjs/src/app/components/Footer/Footer'

export default function AdminLayout({ children }) {
  return (
    <div className='main-page-area3'>
      <HeaderStyle3 />
      <div className="bg-light min-vh-100">
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 col-lg-2 bg-dark text-white p-0">
              <div className="p-3">
                <h5 className="text-white mb-4">Admin Panel</h5>
                <nav className="nav flex-column">
                  <a href="/admin/blog-posts" className="nav-link text-white active">
                    📝 Blog Posts
                  </a>
                  <a href="/admin/dashboard" className="nav-link text-white-50">
                    📊 Dashboard
                  </a>
                  <a href="/admin/settings" className="nav-link text-white-50">
                    ⚙️ Settings
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="col-md-9 col-lg-10">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}