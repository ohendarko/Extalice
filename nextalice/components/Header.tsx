import React from 'react';
import styles from '@/app/styles/header.module.css';
import { icons } from '@/constants';
import Link from 'next/link';
import '../app/globals.css'


const Header = () => {
  return (
    <div className={styles.header}>
      {/* <div className='heading'>
        <h2 className={styles.headingText}>EXTALICE</h2>
      </div> */}

      <div className={styles.headerItems}>
        <div className={styles.headerMenu}>
          <Link href="/"><h3>Home</h3></Link>
          <Link href="/blogs"><h3>Blog</h3></Link>
          <Link href="/shop"><h3>Shop</h3></Link>
          <Link href="/about"><h3>About</h3></Link>
          <Link href="#contact-me"><h3>Contact</h3></Link>
        </div>

        <div className={styles.search}>
          <input type="text" placeholder='Search...' className={styles.searchBox} />
          <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
          <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
          </svg>
        </div>

        <div className={styles.socials}>
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
        </div>
      </div>
    </div>
  )
}

export default Header;