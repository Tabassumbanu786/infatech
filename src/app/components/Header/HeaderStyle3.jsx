import React from 'react'

export default function HeaderStyle3() {
  return (
    <header className="bg-white shadow-sm border-bottom">
      <div className="container-fluid">
        <div className="row align-items-center py-3">
          <div className="col-md-6">
            <h4 className="mb-0 text-primary">Admin Dashboard</h4>
          </div>
          <div className="col-md-6 text-end">
            <nav className="d-inline-flex">
              <a href="/" className="btn btn-outline-primary btn-sm me-2">
                🏠 Home
              </a>
              <a href="/blog" className="btn btn-outline-secondary btn-sm">
                📖 Blog
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}