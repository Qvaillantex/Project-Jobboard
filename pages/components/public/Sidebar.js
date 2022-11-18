import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import style from '/styles/Sidebar.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import {AiOutlineClose} from 'react-icons/ai'
const Sidebar = ({navStatus,setNav}) => {
    const { data: session, status } = useSession()
    const [sideBar, setsideBar] = useState(null);
    useEffect(() => setsideBar(document.querySelector('.'+style.side_bar)), [navStatus] )
    let hideNav = (e)=>{
        setNav(!navStatus)
        if(navStatus == true){
            sideBar.classList.remove(style.slideIn)
            sideBar.classList.add(style.slideOut)
            setTimeout(() => {
                sideBar.style.display = "none"
            }, 2000);
        }
            
    }
    if(session == null){
    return (
            <div className={`${style.side_bar} `}>
                <div className={style.btn_container}>
                    {/* <button className=> */}
                        <AiOutlineClose size={30} onClick={hideNav} className={style.close_btn} />
                    {/* </button> */}
                </div>
                <ul className={`${style.nav}`}>
                    <li className={`${style.nav_element}`}>
                        <Link href="/">
                            <a className={style.lien}>Offres</a>
                        </Link>
                    </li>
                    <li className={`${style.nav_element}`}>
                        <Link href="/Company">
                            <a className={style.lien}>Entreprises</a>
                        </Link>
                    </li>
                    <li className={`${style.nav_element}`}>
                        <Link href="/Inscription">
                            <a className={style.lien}>Inscription</a>
                        </Link>
                    </li>
                    <li className={`${style.nav_element}`}>
                        <Link href="/signin">
                            <a className={style.lien}>Connexion</a>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }else{
        return (<div className={`${style.side_bar} `}>
                <div className={style.btn_container}>
                    {/* <button className=> */}
                        <AiOutlineClose size={30} onClick={hideNav} className={style.close_btn} />
                    {/* </button> */}
                </div>
                <ul className={`${style.nav}`}>
                    <li className={`${style.nav_element}`}>
                        <Link href="/">
                            <a className={style.lien}>Offres</a>
                        </Link>
                    </li>
                    <li className={`${style.nav_element}`}>
                        <Link href="/Company">
                            <a className={style.lien}>Entreprises</a>
                        </Link>
                    </li>
                    <li className={`${style.nav_element}`}>
                        <Link href="/Dashboard">
                            <a className={style.lien}>Mon compte</a>
                        </Link>
                    </li>
                    <li>
                            <button onClick={async ()=>{
                                signOut().then(res=> window.location.replace('/'))
                            }} className="btn btn-danger">
                                <a>
                                    <span>Déconnexion</span>
                                </a>
                            </button>
                        </li>
                </ul>
            </div>)
    }
};

export default Sidebar;