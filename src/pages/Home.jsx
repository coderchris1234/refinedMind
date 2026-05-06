import { Link } from 'react-router-dom'
import { FaCross, FaSeedling, FaBolt, FaBullseye, FaBrain } from 'react-icons/fa'
import './Home.css'

function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: "The Refining Process",
      excerpt: "Like gold tested in fire, our faith grows stronger through trials. Here's what I learned when everything fell apart.",
      category: "Faith & Spiritual Growth",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Discipline Over Motivation",
      excerpt: "Motivation fades, but discipline builds character. The daily choices that shaped my journey.",
      category: "Discipline & Mindset",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Finding Purpose in the Waiting",
      excerpt: "Sometimes God's silence is His answer. What I discovered in the seasons of uncertainty.",
      category: "Purpose & Calling",
      readTime: "6 min read"
    }
  ]

  const themes = [
    { name: "Faith", icon: <FaCross /> },
    { name: "Growth", icon: <FaSeedling /> },
    { name: "Discipline", icon: <FaBolt /> },
    { name: "Purpose", icon: <FaBullseye /> },
    { name: "Identity", icon: <FaBrain /> }
  ]

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">A Refined Mind</h1>
          <p className="hero-tagline">Reflections shaped by experience, refined by faith.</p>
          <p className="hero-intro">
            Welcome to a space where life lessons meet divine purpose. 
            I'm documenting my journey of faith, growth, and the wisdom found in everyday moments.
          </p>
          <Link to="/writings" className="cta-button">Read My Thoughts</Link>
        </div>
        <div className="hero-image">
          <img src="/precious.jpg" alt="Profile" />
        </div>
      </section>

      <section className="themes-section">
        <h2>Exploring Life Through</h2>
        <div className="themes-grid">
          {themes.map((theme) => (
            <div key={theme.name} className="theme-card">
              <span className="theme-icon">{theme.icon}</span>
              <span className="theme-name">{theme.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Reflections</h2>
        <div className="posts-grid">
          {featuredPosts.map((post) => (
            <article key={post.id} className="post-card">
              <span className="post-category">{post.category}</span>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-footer">
                <span className="read-time">{post.readTime}</span>
                <Link to={`/writings/${post.id}`} className="read-more">Read More →</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="view-all">
          <Link to="/writings" className="view-all-link">Explore All Reflections</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
