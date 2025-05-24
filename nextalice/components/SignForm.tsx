'use client';
import React, { useState } from 'react';
import styles from "@/app/styles/form.module.css";

const SignForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    message:"",
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
      setStatus("Thanks for joining!");
      setFormData({ email: "",  message: "Hi, I would like to join your subscriptions for the latest posts." });
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formsection}>
          <label className={styles.formField}>
            Email:
            <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>

        <div className={styles.signButton}>
          <button type="submit" className={styles.joinButton}>Join</button>
        </div>
      </form>
    </div>
  );
}

export default SignForm;