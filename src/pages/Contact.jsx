import { MdEmail, MdPhone } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <header className="contact-header">
          <h1>Let's Grow Together</h1>
          <p>I'd love to hear from you. Share your thoughts, your story, or just say hello.</p>
        </header>

        <div className="contact-content">
          <section className="contact-section">
            <h2>Connect With Me</h2>
            <p>
              This journey isn't meant to be walked alone. Whether you have a question, 
              want to share your own reflection, or just need someone to listen, I'm here.
            </p>
            <p>
              Your story matters. Your struggles matter. Your victories matter. 
              And I'd be honored to hear about them.
            </p>
          </section>

          <div className="contact-methods">
            <div className="contact-card">
              <div className="contact-icon"><MdEmail /></div>
              <h3>Email</h3>
              <p>For longer conversations and deeper reflections</p>
              <a href="mailto:arefinedmind5@gmail.com" className="contact-link">
                arefinedmind5@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon"><MdPhone /></div>
              <h3>Phone</h3>
              <p>Call or text for quick conversations</p>
              <a href="tel:+2349058565450" className="contact-link">
                +234 905 856 5450
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon-group">
                <FaInstagram className="social-icon" />
                <FaXTwitter className="social-icon" />
              </div>
              <h3>Social Media</h3>
              <p>Daily thoughts and quick encouragements</p>
              <div className="social-links">
                <a href="https://www.instagram.com/_a.refined.mind_?igsh=d2x4eHV6a201dnEw" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /> Instagram</a>
                <a href="https://x.com/a_refined_mindX" target="_blank" rel="noopener noreferrer" className="social-link"><FaXTwitter /> X (Twitter)</a>
              </div>
            </div>
          </div>

          <section className="contact-section final">
            <h2>What to Expect</h2>
            <p>
              When you reach out, you're not just sending a message into the void. 
              I read every email, every comment, every message. And I do my best to respond thoughtfully.
            </p>
            <p>
              It might take me a few days, but I promise I'll get back to you. 
              Your words matter, and I want to give them the attention they deserve.
            </p>
            <div className="encouragement-box">
              <p className="encouragement-text">
                "Let us consider how we may spur one another on toward love and good deeds, 
                not giving up meeting together, as some are in the habit of doing, 
                but encouraging one another—and all the more as you see the Day approaching."
              </p>
              <p className="encouragement-reference">— Hebrews 10:24-25</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact
