import '../Css/Contact.css'
const Contact = () => {
  return (
    <form className="contact-form">
    <label>
      Name
      <input type="text" placeholder="Your Name" />
    </label>
    <label>
      Email
      <input type="email" placeholder="Your Email" />
    </label>
    <label>
      Subject
      <input type="text" placeholder="Subject" />
    </label>
    <label>
      Message
      <textarea placeholder="Your Message" rows="5" />
    </label>
    <button type="submit">Submit</button>
  </form>
  )
}

export default Contact



/*  <div className="support-container">
    <VisitorCount />
    <h1>Support</h1>
    <nav className="support-nav">
      <button
        onClick={() => setActiveSection('contact')}
        className={activeSection === 'contact' ? 'active' : ''}
      >
        Contact Us
      </button>
      <button
        onClick={() => setActiveSection('feedback')}
        className={activeSection === 'feedback' ? 'active' : ''}
      >
        Feedback
      </button>
    </nav>
    <div className="support-content">
      {activeSection === 'contact' && <ContactUs />}
      {activeSection === 'feedback' && <Feedback />}
    </div>
  </div> */
