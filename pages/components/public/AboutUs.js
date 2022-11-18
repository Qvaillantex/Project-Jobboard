import { decrypt } from '../../../lib/cryptage';
import style from '/styles/Company_detail.module.css'

const aboutus = ({company})=>{

    return (
        <div className={style.body}>
        <div className={style.container}>
            <div className={`${style.part_1} ${style.shadow}`}>
                <h2>Bienvenu chez {company.name}</h2>
                <p>{company.about}</p>
            </div>
            <div className={style.part_2}>
                <div className="contact">
                    <h3>Mail de contact</h3>
                    <p className={` ${style.shadow}`}>{decrypt(company.mail)}</p>
                </div>
                <div className="place">
                    <h3>Siège social</h3>
                    <p className={` ${style.shadow}`}>{company.Place}</p>
                    <p className={` ${style.shadow}`}>{company.city}</p>
                </div>
            </div>
        </div>
    </div>

                
    );
};

export default aboutus;