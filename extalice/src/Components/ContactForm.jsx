import React, { useState } from 'react';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xeoeyrgr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Thanks for your message!");
      setFormData({ firstname: "", lastname: "", email: "", subject: "", message: "" });
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className='form-container'>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit} className='forms'>
        <div className="form-section">
          <label className='form-field'>
            Firstname:
            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
          </label>

          <label className='form-field'>
            Lastname:
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
          </label>
        </div>

        <div className="form-section">
          <label className='form-field'>
            Email:
            <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          </label>
 
          <label className='form-field'>
            Subject:
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </label>
        </div>

        <label className='form-field'>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>

        <button className='send-button' type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm