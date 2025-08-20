import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const BLOG_FILE_PATH = path.join(process.cwd(), 'infatech-nextjs/src/app/Data/blog.json')

// Helper function to read blog data
function readBlogData() {
  try {
    const fileContents = fs.readFileSync(BLOG_FILE_PATH, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error reading blog data:', error)
    return []
  }
}

// Helper function to write blog data
function writeBlogData(data) {
  try {
    fs.writeFileSync(BLOG_FILE_PATH, JSON.stringify(data, null, 2), 'utf8')
    return true
  } catch (error) {
    console.error('Error writing blog data:', error)
    return false
  }
}

// GET - Fetch single blog post
export async function GET(request, { params }) {
  try {
    const data = readBlogData()
    const post = data.find(item => item.id === params.id)

    if (!post) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error in GET /api/blog-posts/[id]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT - Update blog post
export async function PUT(request, { params }) {
  try {
    const body = await request.json()
    const data = readBlogData()
    const postIndex = data.findIndex(item => item.id === params.id)

    if (postIndex === -1) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    // Update the post
    data[postIndex] = {
      ...data[postIndex],
      ...body,
      category: Array.isArray(body.category) ? body.category : [],
      tags: Array.isArray(body.tags) ? body.tags : []
    }

    if (writeBlogData(data)) {
      return NextResponse.json(data[postIndex])
    } else {
      return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 })
    }
  } catch (error) {
    console.error('Error in PUT /api/blog-posts/[id]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE - Delete blog post
export async function DELETE(request, { params }) {
  try {
    const data = readBlogData()
    const postIndex = data.findIndex(item => item.id === params.id)

    if (postIndex === -1) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    // Remove the post
    data.splice(postIndex, 1)

    if (writeBlogData(data)) {
      return NextResponse.json({ message: 'Blog post deleted successfully' })
    } else {
      return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 })
    }
  } catch (error) {
    console.error('Error in DELETE /api/blog-posts/[id]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}