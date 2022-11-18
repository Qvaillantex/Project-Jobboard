import Searchbar from "./Searchbar";
import Filter from "./Filter"
import styles from "/styles/research.module.css";
import {AiOutlineSearch} from "react-icons/ai"

const companysearch = () => {

    return (
        <div className={styles.researchMask}>
        <div className={styles.researchContainer}>
        
        <form className={styles.formContainer} id="content">
        <div className={styles.questionContainer}>
        <div className={styles.form}>
        <input className={styles.noselect} type="text" name="quoi" id="search-input" placeholder="Quelle entreprise ?"/>
        </div>
        <div className={styles.form}>
        <input className={styles.noselect2} type="text" name="ou" id="search-input" placeholder="Où ?"/>
        </div>
        </div>
        </form>
        </div>
        </div>
                
    );
};

export default companysearch;