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

// GET - Fetch all blog posts
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')
    
    let data = readBlogData()

    // Filter by published status if specified
    if (published !== null) {
      data = data.filter(post => {
        const isPublished = post.published !== false // Default to true if not specified
        return published === 'true' ? isPublished : !isPublished
      })
    }

    // Sort by date (newest first)
    data.sort((a, b) => new Date(b.date) - new Date(a.date))

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error in GET /api/blog-posts:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create new blog post
export async function POST(request) {
  try {
    const body = await request.json()
    const data = readBlogData()
    
    // Add default values
    const newPost = {
      ...body,
      published: body.published !== false, // Default to true
      category: Array.isArray(body.category) ? body.category : [],
      tags: Array.isArray(body.tags) ? body.tags : []
    }
    
    // Check if ID already exists
    if (data.find(post => post.id === newPost.id)) {
      return NextResponse.json({ error: 'Post with this ID already exists' }, { status: 400 })
    }
    
    data.push(newPost)
    
    if (writeBlogData(data)) {
      return NextResponse.json(newPost, { status: 201 })
    } else {
      return NextResponse.json({ error: 'Failed to save blog post' }, { status: 500 })
    }
  } catch (error) {
    console.error('Error in POST /api/blog-posts:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}