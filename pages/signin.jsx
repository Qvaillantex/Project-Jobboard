import { signIn,useSession } from 'next-auth/react';
import React, { useState } from 'react';
import style from '../styles/Connexion.module.css'
import { FcBookmark } from "react-icons/fc";
import Navbar from './components/public/Navbar'
import FixedFooter from './components/public/FixedFooter'
import Sidebar from './components/public/Sidebar'

const SignIn = () => {
   
   
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("")
    const [userForm, setuserForm] = useState(true);
    
    const connexion= async (e)=>{
        e.preventDefault();
  
        let url = userForm ? "http://localhost:3000/api/users?param=connexion" : "http://localhost:3000/api/companies?param=connexion";
        signIn('credentials',{
            email: email,
            password: password,
            url:url,
            redirect:true,
            callbackUrl:'http://localhost:3000/Dashboard'
        })
     }
     const [showSideBard,setShowSideBar] = useState(false)   ;
    return (
        <div>
            <Navbar navStatus = {showSideBard} setNav = {setShowSideBar} />
            <Sidebar navStatus = {showSideBard} setNav = {setShowSideBar} />
            <div className={style.body}>
            <div className={style.halfpage}>
                <div className={style.textContainer}>
                <h1 className={style.title}>Job and I</h1>
                <p>Connectez vous pour profiter de nos offres d'emplois et découvrir de nouvelles oportunités de carrière</p>
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
                
            <div className={style?.main}>
            <form action="" onSubmit={e=>connexion(e)} className={style?.form}>
                <hgroup className={style?.hgroup}>
                <div className={style.switchContainer}>
                <p className={style.switchtext}>Mode entreprise</p>
                <label className={style.switch}>
                    <input type="checkbox" value={userForm} onChange={(e)=>setuserForm(!userForm)}/>
                    <span className={`${style.slider} ${style.round}`}></span>
                </label>
                </div>
                <h2>Connexion: {(userForm ? "Utilisateur" : "Entreprise")}</h2>
                </hgroup>
                <fieldset className={style?.fieldset}>
                    <div>
                        <label htmlFor="">Email</label>
                        <input className={style?.input} type="email" placeholder="Courriel" value={email} onChange={(e)=>setemail(e.target.value)} required />
                        
                    </div>
                    <div>
                        <label htmlFor="">mot de passe</label>
                        <input className={style?.input} type="password" placeholder="Mot de passe" value={password} onChange={(e)=>setpassword(e.target.value)} required />
                        
                    </div>
                    
                </fieldset>
                <button className={style?.button}>Connexion</button>
            </form>
            </div>
            </div>
            <FixedFooter />
        </div>
        
    );
};

export default SignIn;