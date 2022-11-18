import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import styles from "/styles/footer.module.css";
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
      <footer className={styles.footer}>
          <div className={styles.footerup}>
            <div className='logo'>
            <Image className='logoblanc'
              src={"/images/jobandiblank.png"}
              alt="jobandi"
              width={153}
              height={40}
            />
            </div>
            <div className={styles.reseaux}>
              <Link class="instagram" href="https://www.instagram.com/job&i/">
                <a><FaInstagramSquare size={40} /></a>
              </Link>
              <Link class="facebook" href="https://www.facebook.com/job&i">
                <a><FaFacebookSquare size={40} /></a>
              </Link>
              <Link class="twitter" href="https://twitter.com/job&i">
                <a><AiFillTwitterSquare size={40} /></a>
              </Link>
            </div>
          </div>
          <div className={styles.footerbottom}>
            <Link href="http://localhost:3000/confidentialite" className={styles.a}>
            <a>Confidentialité</a>
            </Link>
            <Link href="http://localhost:3000/cookies" className={styles.a}>
            <a>Cookies</a>
            </Link>
            <Link href="http://localhost:3000/cgu" className={styles.a}>
            <a>Condition d'Utilisation</a>
            </Link>
            <Link href="http://localhost:3000/" className={styles.a}>
            <a>Copyright © Job & I 2022</a>
            </Link>
          </div>
      </footer>
    );
};

export default Footer;