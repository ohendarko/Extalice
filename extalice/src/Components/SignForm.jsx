import React, { useState } from 'react';
import "../styles/form.css";

const SignForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    message:"",
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
      setStatus("Thanks for joining!");
      setFormData({ email: "",  message: "Hi, I would like to join your subscriptions for the latest posts." });
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit} className='form'>
        <div className="formsection">
          <label className='form-field'>
            Email:
            <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>

        <div className="sign-button">
          <button type="submit" className='join-button'>Join</button>
        </div>
      </form>
    </div>
  );
}

export default SignForm;