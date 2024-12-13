import React, { useState } from 'react';
import './index.css'; 


// Contact component
const Contact = () => {
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [meetingMessage, setMeetingMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle meeting scheduling
  const handleSchedule = () => {
    if (meetingDate && meetingTime) {
      alert(`Meeting scheduled on ${meetingDate} at ${meetingTime}. Message: ${meetingMessage}`);
    } else {
      alert('Please select both a date and a time.');
    }
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${name} with email ${email}: ${message}`);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact">
        {/* Contact Info */}
        <div className="form-container">
          <div className="contact-info">
            <img src="/images/IMG_7895.jpeg" alt="Contact Icon" className="contact-icon" />
            <p>
              Thank you for visiting my portfolio! I value connecting with like-minded individuals, peers, and potential collaborators.
              Whether you have questions, feedback, or are interested in discussing projects and opportunities, I'm always happy to hear from you.
              Feel free to reach out using the contact form below or through my social media links. Let's start a conversation and explore how we can create something amazing together!
            </p>
            <p>Email : <a href="mailto:christian_rose@live.ca">christian_rose@live.ca</a></p>
            <p>Connect with me on :</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/christian-rose-b00302333/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/CRose1497" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleFormSubmit}>
            <h3>Send Me a Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Meeting Scheduler */}
        <div className="calendar-container">
          <div className="calendar-section">
            <h3>Schedule a Meeting</h3>
            <p>Pick a date and time for your meeting below.</p>

            <label htmlFor="meeting-date">Choose a Date:</label>
            <input
              type="date"
              id="meeting-date"
              className="date-picker"
              value={meetingDate}
              onChange={(e) => setMeetingDate(e.target.value)}
              required
            />

            <label htmlFor="meeting-time">Choose a Time:</label>
            <input
              type="time"
              id="meeting-time"
              className="time-picker"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              required
            />

            <label htmlFor="meeting-message">Add a Message (Optional):</label>
            <textarea
              id="meeting-message"
              className="message-box"
              rows="3"
              placeholder="Add any additional details or comments for the meeting."
              value={meetingMessage}
              onChange={(e) => setMeetingMessage(e.target.value)}
            ></textarea>

            <button type="button" className="schedule-button" onClick={handleSchedule}>
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
