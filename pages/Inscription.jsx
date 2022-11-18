import React, { useState } from 'react';
import style from '../styles/Inscription.module.css'
import CompanyRegisterForm from './components/public/CompanyRegisterForm';
import UserRegisterForm from './components/public/UserRegisterForm';
import Navbar from './components/public/Navbar'
import FixedFooter from './components/public/FixedFooter'
import Sidebar from './components/public/Sidebar'
import { FcBookmark } from "react-icons/fc";

const Inscription = () => {
    const [showSideBard,setShowSideBar] = useState(false)   
    const [userForm, setuserForm] = useState(true);
    
   
    return (
        <div>
            <Navbar navStatus = {showSideBard} setNav = {setShowSideBar} />
            <Sidebar navStatus = {showSideBard} setNav = {setShowSideBar} />
            <div className={style.body}>
            <div className={style.halfpage}>
                <div className={style.textContainer}>
                <h1 className={style.title}>Job and I</h1>
                <p>Inscrivez vous pour profiter de nos offres d'emplois et découvrir de nouvelles oportunités de carrière</p>
                <div className={style.pContainer}>
                <FcBookmark className={style.icon}/><p>Des offres adaptées a votre profil</p>
                </div>
                <div className={style.pContainer}>
                <FcBookmark className={style.icon}/><p>Une canditature facile</p>
                </div>
                <div className={style.pContainer}>
                <FcBookmark className={style.icon}/><p>Sponsorisé par Episteak</p>
                </div>
                </div>
            </div>
            <div className={style.main}>
                <div className={style.jailogo}></div>
                {(userForm) ? <UserRegisterForm style={style}/> : <CompanyRegisterForm style={style}/>}
            </div>
            <div className={style.switchContainer}>
                <p className={style.switchtext}>Mode entreprise</p>
                <label className={style.switch}>
                    <input type="checkbox" value={userForm} onChange={(e)=>setuserForm(!userForm)}/>
                    <span className={`${style.slider} ${style.round}`}></span>
                </label>
                </div>
            </div>
            <FixedFooter />
        </div>
    );
};

export default Inscription;