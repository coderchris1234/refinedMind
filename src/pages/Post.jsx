import { useParams, Link } from 'react-router-dom'
import './Post.css'

function Post() {
  const { id } = useParams()

  // Sample post data - in a real app, this would come from an API or CMS
  const posts = {
    1: {
      title: "The Refining Process",
      category: "Faith & Spiritual Growth",
      date: "May 1, 2026",
      readTime: "5 min read",
      content: `
        <p class="lead">Like gold tested in fire, our faith grows stronger through trials. Here's what I learned when everything fell apart.</p>

        <h2>The Breaking Point</h2>
        <p>I remember the moment clearly. Everything I had worked for, everything I thought defined me, was crumbling. My plans were falling apart, my prayers felt unanswered, and God seemed silent.</p>

        <p>In that moment, I had a choice: to become bitter or to become better. To question God's goodness or to trust His process.</p>

        <blockquote>
          "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance." — James 1:2-3
        </blockquote>

        <h2>The Refining Fire</h2>
        <p>I learned that God doesn't waste our pain. He uses it to refine us, to burn away the impurities, to reveal what's truly valuable underneath.</p>

        <p>The refining process isn't comfortable. It's hot, it's intense, and it feels like everything is being stripped away. But that's exactly the point. God isn't trying to destroy us—He's trying to purify us.</p>

        <h2>What I Discovered</h2>
        <p>Through the fire, I discovered:</p>
        <ul>
          <li><strong>My faith was stronger than I thought.</strong> When everything else was gone, my faith remained.</li>
          <li><strong>God's presence is constant.</strong> Even when I couldn't feel Him, He was there, holding me through the flames.</li>
          <li><strong>Character is built in the hard seasons.</strong> The easy times don't shape us—the difficult ones do.</li>
          <li><strong>Surrender brings peace.</strong> When I stopped fighting the process and surrendered to God's plan, I found peace in the midst of the storm.</li>
        </ul>

        <h2>The Beauty of Refinement</h2>
        <p>Looking back now, I can see the beauty in the process. The things that were burned away needed to go. The pride, the self-reliance, the false securities—they were all holding me back from becoming who God created me to be.</p>

        <p>The refining fire wasn't punishment. It was preparation. God was preparing me for something greater, something I couldn't have handled without being refined first.</p>

        <h2>Your Turn</h2>
        <p>If you're in the fire right now, I want you to know: you're not alone. God is with you, and He's working even when you can't see it.</p>

        <p>The refining process is painful, but it's purposeful. Trust the process. Trust the Refiner. He knows exactly what He's doing.</p>

        <blockquote>
          "But he knows the way that I take; when he has tested me, I will come forth as gold." — Job 23:10
        </blockquote>
      `
    },
    2: {
      title: "Discipline Over Motivation",
      category: "Discipline & Mindset",
      date: "April 28, 2026",
      readTime: "4 min read",
      content: `
        <p class="lead">Motivation fades, but discipline builds character. The daily choices that shaped my journey.</p>

        <h2>The Motivation Trap</h2>
        <p>For years, I relied on motivation to get things done. I'd wait for the feeling, the inspiration, the perfect moment. And when motivation showed up, I'd accomplish great things.</p>

        <p>But motivation is fickle. It comes and goes. And when it left, so did my progress.</p>

        <h2>The Discipline Shift</h2>
        <p>Everything changed when I realized that discipline, not motivation, is what separates those who achieve their goals from those who don't.</p>

        <p>Discipline is doing what needs to be done, even when you don't feel like it. It's showing up consistently, regardless of your emotions or circumstances.</p>

        <blockquote>
          "No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace for those who have been trained by it." — Hebrews 12:11
        </blockquote>

        <h2>Building the Habit</h2>
        <p>Discipline isn't something you're born with—it's something you build. Here's what worked for me:</p>

        <ul>
          <li><strong>Start small.</strong> Don't try to overhaul your entire life overnight. Pick one area and build from there.</li>
          <li><strong>Be consistent.</strong> Show up every day, even if it's just for five minutes.</li>
          <li><strong>Remove friction.</strong> Make it as easy as possible to do the right thing.</li>
          <li><strong>Track your progress.</strong> Seeing your consistency builds momentum.</li>
        </ul>

        <h2>The Compound Effect</h2>
        <p>The beautiful thing about discipline is that it compounds. Small, consistent actions add up over time to create massive results.</p>

        <p>One day of discipline won't change your life. But 365 days of discipline? That's transformational.</p>

        <h2>Faith and Discipline</h2>
        <p>As a Christian, I've learned that discipline is also a spiritual practice. It's about stewarding the life God has given me well. It's about honoring Him with my time, my energy, and my choices.</p>

        <p>Discipline isn't about perfection—it's about faithfulness. It's about showing up, day after day, and trusting that God will use our obedience to shape us into who He's called us to be.</p>
      `
    },
    3: {
      title: "Finding Purpose in the Waiting",
      category: "Purpose & Calling",
      date: "April 25, 2026",
      readTime: "6 min read",
      content: `
        <p class="lead">Sometimes God's silence is His answer. What I discovered in the seasons of uncertainty.</p>

        <h2>The Waiting Room</h2>
        <p>I've spent a lot of time in God's waiting room. Waiting for answers, waiting for direction, waiting for the next step to become clear.</p>

        <p>And if I'm honest, I hate waiting. I want clarity. I want a plan. I want to know what's next.</p>

        <p>But God doesn't always work on my timeline.</p>

        <h2>The Purpose of Waiting</h2>
        <p>I used to think waiting was wasted time. But I've learned that waiting is often where the most important work happens.</p>

        <p>In the waiting, God is:</p>
        <ul>
          <li><strong>Building our character.</strong> Patience, trust, and faith are all developed in the waiting.</li>
          <li><strong>Preparing us for what's next.</strong> Sometimes we're not ready for what God has for us yet.</li>
          <li><strong>Teaching us to depend on Him.</strong> When we don't have a clear path forward, we're forced to lean on God.</li>
        </ul>

        <blockquote>
          "Wait for the Lord; be strong and take heart and wait for the Lord." — Psalm 27:14
        </blockquote>

        <h2>Active Waiting</h2>
        <p>Waiting doesn't mean doing nothing. It means being faithful with what's in front of us while trusting God with what's ahead.</p>

        <p>During seasons of waiting, I've learned to:</p>
        <ul>
          <li>Serve where I am, not where I want to be</li>
          <li>Grow in the areas God has already revealed</li>
          <li>Stay connected to community and accountability</li>
          <li>Keep my heart soft and open to God's leading</li>
        </ul>

        <h2>The Gift of Uncertainty</h2>
        <p>Uncertainty forces us to trust. And trust deepens our relationship with God.</p>

        <p>When we don't know what's next, we have to hold onto the One who does. And in that holding on, we discover that He's enough—even when we don't have all the answers.</p>

        <h2>Your Season of Waiting</h2>
        <p>If you're in a season of waiting right now, don't despise it. God is working, even when you can't see it.</p>

        <p>Your purpose isn't on hold—it's being refined. And when the time is right, God will open the door. Until then, be faithful where you are.</p>
      `
    }
  }

  const post = posts[id] || posts[1]

  return (
    <div className="post">
      <article className="post-container">
        <header className="post-header">
          <Link to="/writings" className="back-link">← Back to Writings</Link>
          <div className="post-meta">
            <span className="post-category">{post.category}</span>
            <span className="post-date">{post.date}</span>
            <span className="post-read-time">{post.readTime}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </header>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <footer className="post-footer">
          <div className="post-divider"></div>
          <p className="post-closing">Thanks for reading. I hope this reflection encouraged you on your journey.</p>
          <Link to="/writings" className="more-posts">Read More Reflections →</Link>
        </footer>
      </article>
    </div>
  )
}

export default Post
