import style from '/styles/Company_detail.module.css'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import Image from 'next/image'

const companynav = () => {

    return (

<div className={style.header}>
    <ul className={style.sub_header}>
    <li><a onClick={displayapropos} className="presentation" id="apropos">A propos</a></li>
                        <li><a onClick={displayoffer} className="offer" id="nosoffres">Nos offres</a></li>
                        <li><a className="spontanee">Candidature spontanée</a></li>
    </ul>
</div>


                
);
};

export default companynav;