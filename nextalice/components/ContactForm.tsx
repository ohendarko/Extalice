'use client'
import React, { useState } from 'react';
import styles from '@/app/styles/form.module.css';


const ContactForm = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <div className={styles.formContainer}>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit} className={styles.forms}>
        <div className={styles.formSection}>
          <label className={styles.formField}>
            Firstname:
            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
          </label>

          <label className={styles.formField}>
            Lastname:
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
          </label>
        </div>

        <div className={styles.formSection}>
          <label className={styles.formField}>
            Email:
            <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          </label>
 
          <label className={styles.formField}>
            Subject:
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </label>
        </div>

        <div className={styles.formSection}>
          <label className={styles.formField}>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
        </div>


        <button className={styles.sendButton} type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm