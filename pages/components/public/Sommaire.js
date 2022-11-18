import React from 'react';
import Link from 'next/link'
import styles from "/styles/infopages.module.css";
import Image from 'next/image';
const sommaire = (props) => {
    return (

        <div className={styles.sommaire}>
            <Link href="#first-section">
                <a className={styles.sommaireLink}><h2 >{props.titre?.titre1}</h2></a>
            </Link>
            <Link href="#second-section">
                <a className={styles.sommaireLink}><h2>{props.titre?.titre2}</h2></a>
            </Link>
            <Link href="#third-section">
                <a className={styles.sommaireLink}><h2>{props.titre?.titre3}</h2></a>
            </Link>
            <Link href="#fourth-section">
                <a className={styles.sommaireLink}><h2>{props.titre?.titre4}</h2></a>
            </Link>
            <Link href="#fifth-section">
                <a className={styles.sommaireLink}><h2>{props.titre?.titre5}</h2></a>
            </Link>
            <Link href="#sixth-section">
                <a className={styles.sommaireLink}><h2>{props.titre?.titre6}</h2></a>
            </Link>
            <Link href="#seventh-section">
                <a className={styles.sommaireLink}><h2>{props.titre?.titre7}</h2></a>
            </Link>
            <Link href="#eighth-section">
                <a className={styles.sommaireLink}><h2>{props.titre?.titre8}</h2></a>
            </Link>

        </div>
    );
};

export default sommaire;