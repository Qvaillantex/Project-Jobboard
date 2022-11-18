import style from '/styles/DetailOffer.module.css'
import {AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link';
import Applybutton from './Applybutton';

const DetailOffer = ({offer,setDetail,detailStatus,session}) => {

    return (
        <div className={`${style.offer_card}`} style={{display: detailStatus ? 'block' : 'none'}}>
            <div className={style.head}>
                <div className={style.btn_close_container}>
                    <AiOutlineClose size={30} onClick={setDetail}  className={style.close_btn} />
                </div>
                <ul>
                    <li><strong className={style.title}>{offer?.title_job}</strong></li>
                    <li className={style.company}>{offer?.company}</li>
                    <li className={style.city}>{offer?.city}</li>
                    <li className={style.start}>Date de commencement le: {offer?.starting_date}</li>
                </ul>
                <div className={style.button_container}>
                    <Applybutton session={session}/>
                </div>
            </div>
            <div className={style.sub_head}>
                <p><strong>Détail du poste</strong></p>
                <div className={style.sub_head_content}>
                    <div>
                        <p>Salaire</p>
                        <div><span>{offer?.salary}</span> €</div>
                    </div>
                    <div>
                        <p>Type de contrat</p>
                        <div><span>{offer?.type}</span> </div>
                    </div>
                    <div>
                        <p>Format</p>
                        <div><span>{offer?.format}</span> </div>
                    </div>
                    <div>
                        <p>Heure / semaine </p>
                        <div><span>{offer?.schedule}</span> H</div>
                    </div>
                </div>
                
            </div>
            <div className={style.body}>
                {offer?.description}
            </div>
        </div>
    );
};


export default DetailOffer;