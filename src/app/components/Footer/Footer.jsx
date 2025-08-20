import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 Admin Dashboard. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-end">
            <p className="mb-0">Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  )
}