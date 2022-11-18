import React, { useEffect, useState } from 'react'
import { decrypt } from '../../../lib/cryptage';
const Application_company = ({user}) => {
    const [applications,setapplications] = useState('')
    const [change,setChange] = useState(1)
    const [modalType,setmodalType] = useState("edit")
    const [modal,setmodal] = useState(false)
    useEffect(() => {
     let url = "http://localhost:3000/api/companies?param=applications";
     fetch(url,{method:"POST",body:JSON.stringify({ref1:user.ref1})}).then(res=>res.json()).then(res=>setapplications(res))
     
    }, [change]);
    const handleApplication = (response )=>{
        fetch("http://localhost:3000/api/companies?param=setApplication",{method:"POST",body:JSON.stringify(response)}).then(res=>res.json()).then(res=>setapplications(res))
    }
    console.log(applications)
    if(applications != "" ){
        return (
            <div>
                
                {applications.map(application=>{
                    
                    return <div className="card m-2" key={application.id_job_application}>
                        <div className="card-header">
                            Poste: {application.title}
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">Candidat: {application.firstname} {application.lastname}</h5>
                            <p className="card-text">
                                email de contact: {decrypt(application.mail)}
                            </p>
                            <p className="card-text">
                                Numéro: {application.phone}
                            </p>
                            <div className='d-flex justify-content-around align-items-center'>
                                {application.status == 0 ? <div>
                                    <a href="#" onClick={()=>{
                                     let data = {status:2,user_id:application.user_id,id_job_offer:application.id_job_offer}
                                     handleApplication(data)
                                    }} className="btn btn-danger mx-2">Refuser</a>
                                    <a href="#" onClick={()=>{
                                        let data = {status:1,user_id:application.user_id,id_job_offer:application.id_job_offer}
                                        handleApplication(data)
                                        }} className="btn btn-success">Accepter</a>
                                </div>: ''}
                                {application.status == 1 ? <div className='text-success'>Accepté</div> : ''}
                                {application.status == 2 ? <div className='text-danger'>Refusé</div> : ''}
                                
                            </div>
                        </div>
                    </div>
                
                })}
            </div>
        );
    }else{
        return(
            <div>yo</div>
        )
    }
};

export default Application_company;