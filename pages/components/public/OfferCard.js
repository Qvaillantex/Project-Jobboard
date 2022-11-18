import React from 'react';
import {FaMoneyBillWave} from 'react-icons/fa'
import {BsClockFill} from 'react-icons/bs'
import {BsBriefcaseFill} from 'react-icons/bs'
import style from '/styles/OfferCard.module.css'

const OfferCard = ({offer,detailStatus, setDetail,changeOffer}) => {
    
    // exemple d'objet offer
   
    let str = offer?.description.slice(0,130);
    str += "..."
    return (
        <div className={style.offer_card}>
            <ul className={style.head}>
                <li><strong className={style.title_job}>{offer?.title_job}</strong></li>
                <li className={style.company}>{offer?.company}</li>
                <li className={style.city}>{offer?.city}</li>
            </ul>
            <ul className={style.sub_head}>
                <li><span>{offer?.salary}</span> €<span><FaMoneyBillWave /></span></li>
                <li><span>{offer?.type}</span> <span><BsBriefcaseFill /></span></li>
                <li><span>{offer?.schedule}</span> H<span><BsClockFill /></span></li>
            </ul>
            <div className={style.body}>
                {str}
            </div>
            <div className={style.button_container}>
                <button onClick={()=>{(detailStatus == false ? setDetail(offer) : changeOffer(offer))}}>Détail</button>
            </div>
        </div>
    );
};

export default OfferCard;