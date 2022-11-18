import React, {useState, useEffect} from 'react';
import Company_offer_card from './Company_offer_card';
import Modal_admin from './Modal_admin';
const Offers_panel = ({user}) => {
    const [offers,setOffers] = useState('')
    const [jobs,setjobs] = useState('')
    const [companies,setcompanies] = useState('')
    const [change,setChange] = useState(1)
    const [modalType,setmodalType] = useState("edit")
    const [modal,setmodal] = useState(false)
    let inputs1 = [
        {type:"select-company",label:"Entreprise",value:""},
        {type:"select-job",label:"Poste concerné",value:""},
        {type:"text",label:"Titre de l'offre",value:""},
        {type:"textarea",label:"Ville",value:""},
    ]
    let buttons1 = [
        {value:"ajouter", className:'btn btn-success', action:(data)=>save(data)}
    ]
    let save = (e)=>{
        let data= {
            title_offer:e[2].value,
            description:e[3].value,
            company_id:e[0].value,
            job_id:e[1].value,
        }
        console.log(data)
        fetch('http://localhost:3000/api/companies?param=addJO',{method:"POST",body:JSON.stringify(data)}).then(res=>res.json()).then(res=>{
            setChange(change+1)
            return res
        })
    }
    // const [publish,setPublish] = useState(offer.active)
    
    useEffect(() => {
     let url = "http://localhost:3000/api/companies?param=offers";
     fetch(url).then(res=>res.json()).then(res=>setOffers(res))
     fetch("http://localhost:3000/api/companies?param=jobs").then(res=>res.json()).then(res=>setjobs(res))
     fetch("http://localhost:3000/api/companies").then(res=>res.json()).then(res=>setcompanies(res))
     
    }, [change]);
    if(offers != '' ){
        return (
            <div>
                <h2>Administration des offres d'emploi</h2>
                <a href="#" onClick={()=>{
                    document.querySelector(`#modal-${user.ref1}`).style.display = 'block'
                    setmodal(!modal)
                }} className="btn btn-success m-2">Ajouter une offre</a>
                {offers.map(offer=>{
                       
                    let action = (e)=>{
                        console.log(e)
                        let data= {
                            title_offer:e[0].value,
                            description:e[1].value,
                            active:e[2].checked,
                            id_job_offer:offer.id_job_offer,
                        }
                        fetch('http://localhost:3000/api/companies?param=updateJO',{method:"POST",body:JSON.stringify(data)}).then(res=>res.json()).then(res=>{
                            setChange(change+1)
                            return res
                        })
                    }
                    const deleteJo = ()=>{  
                        fetch('http://localhost:3000/api/companies?param=deleteJO',{method:"POST",body:JSON.stringify({id_job_offer:offer.id_job_offer})}).then(res=>res.json()).then(res=>res)
                    }
                    let inputs = [
                        {type:"text",label:"Titre de l'offre",value:offer.title_offer},
                        {type:"textarea",label:"Ville",value:offer.description},
                        {type:"checkbox",label:"Publier",value:offer.active},
                    ]
                   
                    let buttons = [
                        {value:"modifier", className:'btn btn-warning', action:(data)=>action(data)}
                    ]
                    return <>
                    <div className="card m-2">
                    <div className="card-header">
                        {offer.title_offer}
                    </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">{offer.title_job}</h5>
                        <p className="card-text">{offer.description}</p>
                        <div className='d-flex justify-content-around align-items-center'>
                            <div>
                                <a href="#" onClick={()=>{
                                    deleteJo()
                                    setChange(change+1)
                                }} className="btn btn-danger mx-2">Supprimer</a>
                                <a href="#" onClick={()=>{
                                    document.querySelector(`#modal-${offer.id_job_offer}`).style.display = 'block'
                                    }} className="btn btn-warning">Editer</a>
                            </div>
                            <div className="form-check form-check-inline">
                                {/* <input className="form-check-input mx-2" type="checkbox" id="inlineCheckbox1" checked={publish} onChange={(e)=>{
                                    setPublish(!publish)
                                    fetch('http://localhost:3000/api/companies?param=publish',{method:'POST',body:JSON.stringify({active:!publish,id_job_offer:offer.id_job_offer})})
                                }} /> */}
                                <label className={`form-check-label ${(offer.active) ? "text-success" : "text-warning"} `} >{(offer.active) ? "Publié" : "Archivé"}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal_admin key={offer.id_job_offer} inputs ={inputs} buttons={buttons} data={user} title="Modifier une offre" id={offer.id_job_offer} action={action}/>

            </>
                })}
                <Modal_admin id={user.ref1} inputs ={inputs1} title="Créer une offre" buttons={buttons1} data={{jobs:jobs,companies:companies}}  action={save}/>
            </div>
        );
    }else{
        return(
            <div>yo</div>
        )
    }
};

export default Offers_panel;