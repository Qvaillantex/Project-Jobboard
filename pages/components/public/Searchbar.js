import React from 'react';
import styles from "/styles/searchbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const searchbar = () => {

    return (
    <div className={styles.searchbar}>
        <form className={styles.formContainer} id="content">
        <div className={styles.form}>
        <input className={styles.noselect} type="text" name="quoi" id="search-input" placeholder="Quel métier ?"/>
        </div>
        <div className={styles.form}>
        <input className={styles.noselect2} type="text" name="ou" id="search-input" placeholder="Où ?"/>
        </div>
        <div>
            <imput type="submit">
            <button className={styles.research}><AiOutlineSearch /></button>
            </imput>
        </div>
        </form>
  </div>

  
        
    );
};

export default searchbar;