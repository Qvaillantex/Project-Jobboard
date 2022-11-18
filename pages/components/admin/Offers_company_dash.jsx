import React, { useEffect, useState } from 'react';
import Company_offer_card from './Company_offer_card';

const Offers_company_dash = ({user}) => {
    const [offers,setOffers] = useState('')
    const [change,setChange] = useState(1)
    const [modalType,setmodalType] = useState("edit")
    const [modal,setmodal] = useState(false)
    useEffect(() => {
     let url = "http://localhost:3000/api/companies?param=companyOffers";
     fetch(url,{method:"POST",body:JSON.stringify({ref1:user.ref1})}).then(res=>res.json()).then(res=>setOffers(res))
     
    }, [change]);
    if(offers.offers != undefined ){
        return (
            <div>
                <a href="#" onClick={()=>{
                    setmodalType('create')
                    setmodal(!modal)
                }} className="btn btn-success m-2">Ajouter une offre</a>
                {offers.offers.map(offer=>{
                    return <Company_offer_card user={user} key={offer.id_job_offer} modal={modal} setmodal={setmodal} offer={offer} modalType={modalType} setmodalType={setmodalType} change={change} jobs={offers.job} setChange={setChange}/>
                })}
            </div>
        );
    }else{
        return(
            <div>yo</div>
        )
    }
};

export default Offers_company_dash;