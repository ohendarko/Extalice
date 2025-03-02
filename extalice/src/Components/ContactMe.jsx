import React from 'react';
import ContactForm from './ContactForm';
import SignForm from './SignForm';

const ContactMe = () => {
  return (
    <div className='contacts' id='contact-me'>
      <div className="sign-up">
        <h2 className="follow-me">Follow Me</h2>
        <div className="socials social">
          <div className="instagram social-icon">
            <a href="https://www.instagram.com/e_star_lice7?igsh=MWxreDNlcmNoazd5cw%3D%3D&utm_source=qr" className="insta-link">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24">
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z">
              </path>
              </svg>              
            </a>
          </div>

          <div className="facebook social-icon">
            <a href="https://www.facebook.com/share/16DoNwYVfj/?mibextid=wwXIfr" className="face-link">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 16 16">
              <path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"></path>
              </svg>
            </a>
          </div>
        </div>
        <h1 className="sign-latest">Sign Up For My Latest</h1>
        <SignForm />

        <h1 className="collabs">Collabs</h1>
        <p className="collab-message">
          For PR and commercial enquiries please contact <a href="mailto:ohendarko@gmail.com" className="emailKOD">ohendarko@gmail.com</a>
        </p>
      </div>

      <div className="contact-form">
        <p className="reach-out">You can also reach out to me.</p>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe;