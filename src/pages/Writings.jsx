import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Writings.css'

function Writings() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Faith & Spiritual Growth',
    'Life Lessons',
    'Personal Reflections',
    'Discipline & Mindset',
    'Purpose & Calling'
  ]

  const posts = [
    {
      id: 1,
      title: "The Refining Process",
      excerpt: "Like gold tested in fire, our faith grows stronger through trials. Here's what I learned when everything fell apart.",
      category: "Faith & Spiritual Growth",
      readTime: "5 min read",
      date: "May 1, 2026"
    },
    {
      id: 2,
      title: "Discipline Over Motivation",
      excerpt: "Motivation fades, but discipline builds character. The daily choices that shaped my journey.",
      category: "Discipline & Mindset",
      readTime: "4 min read",
      date: "April 28, 2026"
    },
    {
      id: 3,
      title: "Finding Purpose in the Waiting",
      excerpt: "Sometimes God's silence is His answer. What I discovered in the seasons of uncertainty.",
      category: "Purpose & Calling",
      readTime: "6 min read",
      date: "April 25, 2026"
    },
    {
      id: 4,
      title: "When Prayer Feels Empty",
      excerpt: "Honest reflections on the seasons when talking to God felt like talking to the ceiling.",
      category: "Personal Reflections",
      readTime: "5 min read",
      date: "April 20, 2026"
    },
    {
      id: 5,
      title: "The Gift of Failure",
      excerpt: "My biggest failures became my greatest teachers. Here's what falling taught me about grace.",
      category: "Life Lessons",
      readTime: "7 min read",
      date: "April 15, 2026"
    },
    {
      id: 6,
      title: "Identity Beyond Achievement",
      excerpt: "What happens when your accomplishments don't define you anymore? Finding who you are in Christ.",
      category: "Purpose & Calling",
      readTime: "6 min read",
      date: "April 10, 2026"
    }
  ]

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  return (
    <div className="writings">
      <div className="writings-container">
        <header className="writings-header">
          <h1>Writings & Reflections</h1>
          <p>Thoughts on faith, growth, and the journey of becoming</p>
        </header>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="writings-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="writing-card">
              <div className="writing-meta">
                <span className="writing-category">{post.category}</span>
                <span className="writing-date">{post.date}</span>
              </div>
              <h2 className="writing-title">
                <Link to={`/writings/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="writing-excerpt">{post.excerpt}</p>
              <div className="writing-footer">
                <span className="writing-read-time">{post.readTime}</span>
                <Link to={`/writings/${post.id}`} className="writing-link">
                  Continue Reading →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-posts">
            <p>No posts found in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Writings
