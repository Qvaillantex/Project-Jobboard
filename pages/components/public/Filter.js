import React from 'react';
import Link from 'next/link'
import styles from "/styles/filter.module.css";
import Image from 'next/image';
import { useRef } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const searchbar = () => {

    return (
    <div>
        <form className={styles.filterContainer}>
            <div className={styles.selectbox}>
            <select name="sector" id="sector" className={styles.select} >
                <option value="" className={styles.option}>--Sector--</option>
                <option value="s1">Numérique</option>
                <option value="s2">Agriculture</option>
                <option value="s3">Chimie</option>
                <option value="s4">Banque</option>
                <option value="s5">Hôtellerie-Restauration</option>
                <option value="s6">Alimentaire</option>
                <option value="s7">Commerce</option>
                <option value="s8">Automobile</option>
            </select>
            </div>
            <div className={styles.selectbox}>
            <select name="duration" id="duration" className={styles.select}>
                <option className={styles.option} value="">Type de contrat</option>
                <option value="ct1">CDI</option>
                <option value="ct2">CDD</option>
                <option value="ct3">Interim</option>
                <option value="ct4">Alternance</option>
                <option value="ct5">Temps partiel</option>
            </select>
            </div>
            <div className={styles.selectbox}>
            <select name="salary" id="salary" className={styles.select}>
                <option value="">--Salary--</option>
                <option value="sl1200">{"<"}1200</option>
                <option value="sl2000">1200-2000</option>
                <option value="sl3000">2000-3000</option>
                <option value="sl4000">3000-4000</option>
                <option value="sl4000+">{">"}4000</option>
            </select>
            </div>
            <div className={styles.selectbox}>
            <select name="teletravail" id="teletravail" className={styles.select}>
                <option value="">--Teletravail--</option>
                <option value="t1">Possible</option>
                <option value="t0">Non Autorisé</option>
            </select>
            <input type="submit"></input>
            </div>
            
            
        </form>
    </div>

  
        
    );
};

export default searchbar;