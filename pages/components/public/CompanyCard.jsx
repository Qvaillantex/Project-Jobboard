import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {MdWork} from 'react-icons/md'
import style from '/styles/company_card.module.css'

const CompanyCard = ({company}) => {
   
    
    let bg = ["bg1.jpg","bg2.webp","bg3.jpg","bg4.jpg"]
    
    let current_bg = bg[ Math.floor(Math.random() * 4)];
    return (
        <div className={style.company_card}>
            <div className={style.header}>
                
                    <Image src={"/images/company_bg/"+current_bg} layout='fill'
                    />
                    {/* <Image  width="100%" height="100%" /> */}
                
            </div>
            <div className={style.body}>
                <div className={style.company_image}>
                    <Image src={"/images/atos.jpeg"} width={100} height={100} />
                </div>
                <div className={style.content}>
                    <p>{company?.name}</p>
                    <p>{company?.city}</p>
                    <p>{company?.about}</p>
                </div>
            </div>
            <div className={style.footer}>
                <Link href={`/Company/${company?.id_company}`}>
                    <a className={style.link}><span><MdWork /></span> <span>voir nos offres</span></a>
                </Link>
            </div>
        </div>
    );
};

export default CompanyCard;