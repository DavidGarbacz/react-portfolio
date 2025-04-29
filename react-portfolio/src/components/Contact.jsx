// src/components/Contact.jsx
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // (You can wire up actual submissions later)
    setStatus('Your message has been sent!');
    setTimeout(() => setStatus(''), 3000);
  }

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Or send me a message right here:</p>
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
        {status && <p className="success">{status}</p>}
      </form>
    </section>
  );
}
