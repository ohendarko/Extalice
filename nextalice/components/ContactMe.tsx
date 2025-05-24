import React from 'react';
import ContactForm from '@/components/ContactForm';
import SignForm from '@/components/SignForm';
import styles from '@/app/styles/form.module.css';
import secStyles from '@/app/styles/body.module.css';

const ContactMe = () => {
  return (
    <div className={secStyles.contacts} id='contact-me'>
      <div className={secStyles.signUp}>
        <h2 className={styles.followMe}>Follow Me</h2>
        <div className={`${styles.socials} ${styles.social}`}>
          <div className={`${styles.instagram} ${styles.socialIcon}`}>
            <a href="https://www.instagram.com/e_star_lice7?igsh=MWxreDNlcmNoazd5cw%3D%3D&utm_source=qr" className="insta-link">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24">
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z">
              </path>
              </svg>              
            </a>
          </div>

          <div className={`${styles.facebook} ${styles.socialIcon}`}>
            <a href="https://www.facebook.com/share/16DoNwYVfj/?mibextid=wwXIfr" className="face-link">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 16 16">
              <path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"></path>
              </svg>
            </a>
          </div>

          <div className={`${styles.youtube} ${styles.socialIcon}`}>
            <a href="https://youtube.com/@e_star_lice?si=ZxTbgZX9hfSSc1yA" className="yt-link">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24">
                <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
              </svg>
            </a>
          </div>

          <div className={`${styles.socialIcon} ${styles.whatsapp}`}>
            <a href="https://chat.whatsapp.com/IMimffvBgTR7AxzJMCkIdM" className={styles.whatsappLink}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path>
              </svg>
            </a>
          </div>

        </div>
        <h1 className={styles.signLatest}>Sign Up For My Latest</h1>
        <SignForm />

        <h1 className={styles.collabs}>Collabs</h1>
        <p className={styles.collabMessage}>
          For PR and commercial enquiries please contact <a href="mailto:ohendarko@gmail.com" className={styles.emailKOD}>ohendarko@gmail.com</a>
        </p>
      </div>

      <div className={styles.contactForm}>
        <p className={styles.reachOut}>You can also reach out to me.</p>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe;