'use client'
import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Eye, Save, X } from 'lucide-react'

export default function BlogAdminPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingPost, setEditingPost] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    img: '',
    category: [],
    tags: [],
    summary: '',
    content: '',
    published: true
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog-posts')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const method = editingPost ? 'PUT' : 'POST'
      const url = editingPost ? `/api/blog-posts/${editingPost.id}` : '/api/blog-posts'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        await fetchPosts()
        resetForm()
        alert(editingPost ? 'Post updated successfully!' : 'Post created successfully!')
      } else {
        alert('Error saving post')
      }
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Error saving post')
    }
  }

  const handleEdit = (post) => {
    setEditingPost(post)
    setFormData({
      ...post,
      category: Array.isArray(post.category) ? post.category : [],
      tags: Array.isArray(post.tags) ? post.tags : []
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        const response = await fetch(`/api/blog-posts/${id}`, {
          method: 'DELETE',
        })

        if (response.ok) {
          await fetchPosts()
          alert('Post deleted successfully!')
        } else {
          alert('Error deleting post')
        }
      } catch (error) {
        console.error('Error deleting post:', error)
        alert('Error deleting post')
      }
    }
  }

  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      author: '',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      img: '',
      category: [],
      tags: [],
      summary: '',
      content: '',
      published: true
    })
    setEditingPost(null)
    setShowForm(false)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleArrayInputChange = (name, value) => {
    const array = value.split(',').map(item => item.trim()).filter(item => item)
    setFormData(prev => ({
      ...prev,
      [name]: array
    }))
  }

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 fw-bold">Blog Posts Admin</h1>
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-primary d-flex align-items-center gap-2"
        >
          <Plus size={20} />
          New Post
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={resetForm}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Post ID (URL slug)</label>
                      <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                        placeholder="e.g., my-blog-post"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Author</label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Date</label>
                      <input
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Image URL</label>
                      <input
                        type="url"
                        name="img"
                        value={formData.img}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                        placeholder="/assets/images/blog/blog1.png"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Categories (comma-separated)</label>
                      <input
                        type="text"
                        value={formData.category.join(', ')}
                        onChange={(e) => handleArrayInputChange('category', e.target.value)}
                        className="form-control"
                        placeholder="Technology, Startup"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Tags (comma-separated)</label>
                      <input
                        type="text"
                        value={formData.tags.join(', ')}
                        onChange={(e) => handleArrayInputChange('tags', e.target.value)}
                        className="form-control"
                        placeholder="Web Development, APIs"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Summary</label>
                      <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="2"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Content (HTML)</label>
                      <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="10"
                        required
                        placeholder="Enter HTML content here..."
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="published"
                          checked={formData.published}
                          onChange={handleInputChange}
                          className="form-check-input"
                          id="published"
                        />
                        <label className="form-check-label" htmlFor="published">
                          Published
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <Save size={16} className="me-2" />
                    {editingPost ? 'Update' : 'Create'} Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img
                src={post.img}
                alt={post.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className={`badge ${post.published ? 'bg-success' : 'bg-warning'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                  <small className="text-muted">{post.date}</small>
                </div>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted small flex-grow-1">
                  {post.summary}
                </p>
                <div className="mb-2">
                  <small className="text-muted">By {post.author}</small>
                </div>
                <div className="mb-3">
                  {post.category.map((cat, index) => (
                    <span key={index} className="badge bg-light text-dark me-1">
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-2 mt-auto">
                  <button
                    onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                    className="btn btn-outline-primary btn-sm flex-fill"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => handleEdit(post)}
                    className="btn btn-outline-warning btn-sm flex-fill"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="btn btn-outline-danger btn-sm flex-fill"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">No blog posts found. Create your first post!</p>
        </div>
      )}
    </div>
  )
}