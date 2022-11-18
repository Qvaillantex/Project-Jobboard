import Link from 'next/link'
import style from '/styles/Navbar.module.css'
import {RiAccountCircleLine} from 'react-icons/ri'
import { BiMenuAltLeft } from 'react-icons/bi'
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from 'react';
const Navbar = ({navStatus,setNav}) => {
    
    const { data: session, status } = useSession()
    const [sideBar, setsideBar] = useState(null);
    useEffect(() => {
            setsideBar(document.querySelector('.Sidebar_side_bar__2GiXX'))
            }, [navStatus])
    let showSideBar = (e)=>{
        setNav(!navStatus)
        if(navStatus == false){
            sideBar.style.display = "block"
            sideBar.classList.remove("Sidebar_slideOut__IDfJJ")
            sideBar.classList.add("Sidebar_slideIn__c_eIB")
        }
    }
    if(session == null){

        return (
            <div className={style.navbar}>
                <div className={style.logo_container}>
                    <Link href="/">
                        <a className={style.large_screen}>
                            <Image  src="/images/jobandi.png" width="153" height="40"/>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={style.logo}>
                            <Image src="/images/logo.png" width="60" height="60"/>
                        </a>
                    </Link>
                </div>
                <div className={style.nav_container}>
                    <ul className={`${style.nav} ${style.nav_element} ${style.large_screen}`}>
                        <li className={`${style.nav_element}`}>
                        <Link href={"/"}>
                            <a>
                                <span>Offres</span>
                            </a>
                        </Link>
                        </li>
                        <li className={style.nav_element}>
                        <Link href={"/Company"}>
                            <a>
                                <span>Entreprises</span>
                            </a>
                        </Link>
                        </li>
                        <li className={style.nav_element}>
                        <Link href={"/signin"}>
                            <a>
                                <span>Connexion</span>
                            </a>
                        </Link>
                        </li>
                    </ul>
                    <div className={style.account_container }>
                        <Link href={"/Inscription"}>
                            <a className={style.account_link }>
                                <span className={`${style.large_screen}`}>Inscription</span>
                            </a>
                        </Link>
                    </div>
                    <div className={` ${style.account_link} ${style.small_screen}`}>
                        <BiMenuAltLeft onClick={showSideBar} className={`${style.icon_size} ${style.small_screen}`} />
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div className={style.navbar}>
                <div className={style.logo_container}>
                    <Link href="/">
                        <a className={style.large_screen}>
                            <Image  src="/images/jobandi.png" width="153" height="40"/>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={style.logo}>
                            <Image src="/images/logo.png" width="60" height="60"/>
                        </a>
                    </Link>
                </div>
                <div className={style.nav_container}>
                    <ul className={`${style.nav} ${style.nav_element} ${style.large_screen}`}>
                        <li className={`${style.nav_element}`}>
                        <Link href={"/"}>
                            <a>
                                <span>Offres</span>
                            </a>
                        </Link>
                        </li>
                        <li className={style.nav_element}>
                        <Link href={"/Company"}>
                            <a>
                                <span>Entreprises</span>
                            </a>
                        </Link>
                        </li>
                        <li className={style.nav_element}>
                            <button onClick={async ()=>{
                                signOut().then(res=> window.location.replace('/'))
                            }} className="btn btn-danger">
                                <a>
                                    <span>Déconnexion</span>
                                </a>
                            </button>
                        </li>
                    </ul>
                    <div className={style.account_container }>
                        <Link href={"/Dashboard"}>
                            <a className={style.account_link }>
                                <span className={`${style.large_screen}`}>Profile</span>
                                <span><RiAccountCircleLine className={`${style.icon_size} ${style.small_screen}`} /></span>
                            </a>
                        </Link>
                    </div>
                    <div className={` ${style.account_link} ${style.small_screen}`}>
                        <BiMenuAltLeft onClick={showSideBar} className={`${style.icon_size} ${style.small_screen}`} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;