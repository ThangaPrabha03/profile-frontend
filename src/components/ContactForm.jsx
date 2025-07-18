// src/components/ContactForm.jsx
import { useState } from 'react';
import '../App.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields!');
      return;
    }

    if (phone.length !== 10) {
      alert('Please Enter a Valid Phone Number!');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address!');
      return;
    }

    try {
      const response = await fetch('https://profile-backend-o3h8.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Send a Message</h3>

      <div className="form-group">
        <label>Name<span className="required">*</span></label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label>Email<span className="required">*</span></label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label>Phone<span className="required">*</span></label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>

      <div className="form-group">
        <label>Message<span className="required">*</span></label>
        <textarea
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default ContactForm;
