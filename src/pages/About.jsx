import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <img src="/precious.jpg" alt="Profile" className="about-image" />
          <div className="about-intro">
            <h1>About A Refined Mind</h1>
            <p className="tagline">Where life lessons meet divine purpose</p>
          </div>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>My Story</h2>
            <p>
              I'm not a theologian, a life coach, or someone who has it all figured out. 
              I'm just someone walking this journey of faith, stumbling, learning, and growing along the way.
            </p>
            <p>
              This space was born from a simple realization: God speaks through our everyday experiences. 
              The struggles, the victories, the mundane moments—they all carry lessons if we're willing to pause and reflect.
            </p>
            <p>
              I've learned more about God's character in seasons of waiting than in moments of breakthrough. 
              I've discovered more about grace through my failures than through my successes. 
              And I've found that the most profound truths often come wrapped in the simplest experiences.
            </p>
          </section>

          <section className="about-section">
            <h2>Why I Write</h2>
            <p>
              Writing is my way of processing life. It's how I make sense of what God is teaching me, 
              how I remember His faithfulness, and how I share the journey with others who might be walking a similar path.
            </p>
            <p>
              I write because I believe our stories matter. Not because they're extraordinary, 
              but because they're real. And in that realness, we find connection, encouragement, and hope.
            </p>
            <p>
              My goal isn't to preach at you or pretend I have all the answers. 
              It's to share honestly about what I'm learning, to point you toward the One who does have all the answers, 
              and to create a space where we can grow together.
            </p>
          </section>

          <section className="about-section">
            <h2>My Journey with Faith</h2>
            <p>
              Faith hasn't always been easy for me. There have been seasons of doubt, 
              moments of questioning, and times when God felt distant. But through it all, 
              He's been faithful—even when I couldn't see it.
            </p>
            <p>
              I've learned that faith isn't about having perfect theology or never struggling. 
              It's about showing up, being honest with God, and trusting Him even when the path isn't clear.
            </p>
            <p>
              My faith is still being refined. I'm still learning, still growing, still discovering new depths of God's love and grace. 
              And that's exactly why this platform exists—to document the journey, not the destination.
            </p>
          </section>

          <section className="about-section">
            <h2>What You Can Expect</h2>
            <p>
              This isn't a place for polished, perfect content. It's raw, honest, and real. 
              You'll find reflections on faith, stories from my own life, lessons learned through discipline and struggle, 
              and insights about purpose and identity.
            </p>
            <p>
              I write about the hard stuff—the doubts, the failures, the messy middle. 
              But I also write about hope, redemption, and the beauty of God's faithfulness.
            </p>
            <p>
              My hope is that as you read, you'll find something that resonates with your own journey. 
              That you'll be encouraged to keep going, to dig deeper, and to trust that God is working even when you can't see it.
            </p>
          </section>

          <section className="about-section final">
            <h2>Let's Grow Together</h2>
            <p>
              This journey isn't meant to be walked alone. I'd love to hear your story, 
              your reflections, and what God is teaching you. Let's encourage each other, 
              challenge each other, and point each other back to Jesus.
            </p>
            <p>
              Thanks for being here. I'm grateful you've chosen to spend some time in this space.
            </p>
            <p className="signature">— A Refined Mind</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
