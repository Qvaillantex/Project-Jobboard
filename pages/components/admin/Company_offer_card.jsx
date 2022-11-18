import React, { useState } from 'react';

const Company_offer_card = ({offer,setChange,change,jobs, modal, setmodal,modalType, setmodalType}) => {
    const [publish,setPublish] = useState(offer.active)
    const [job_val,setJob_val] = useState(jobs[0].id_job)
    const [job_offer,setJob_offer] = useState({
        title_offer: offer.title_offer,
        title_job: offer.title_job,
        description: offer.description,
        id_job_offer: offer.id_job_offer
    })
    const [job_offer_create,setJob_offer_create] = useState({
        title_offer: "",
        title_job: undefined,
        description: "",
        id_company: offer.company_id,
        job_id: job_val
    })
    
    const update = ()=>{  
        fetch('http://localhost:3000/api/companies?param=updateJO',{method:"POST",body:JSON.stringify(job_offer)}).then(res=>res.json()).then(res=>res)
    }
    const deleteJo = ()=>{  
        fetch('http://localhost:3000/api/companies?param=deleteJO',{method:"POST",body:JSON.stringify({id_job_offer:job_offer.id_job_offer})}).then(res=>res.json()).then(res=>res)
    }
    const add =()=>{
        fetch('http://localhost:3000/api/companies?param=addJO',{method:"POST",body:JSON.stringify(job_offer_create)}).then(res=>res.json()).then(res=>res)

    }
    return (
        <>
            <div className="card m-2">
                <div className="card-header">
                    {job_offer.title_offer}
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">{offer.title_job}</h5>
                    <p className="card-text">{job_offer.description}</p>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                            <a href="#" onClick={()=>{
                                deleteJo()
                                setChange(change+1)
                            }} className="btn btn-danger mx-2">Supprimer</a>
                            <a href="#" onClick={()=>{
                                setmodal(!modal)
                                setmodalType('edit')
                                }} className="btn btn-warning">Editer</a>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input mx-2" type="checkbox" id="inlineCheckbox1" checked={publish} onChange={(e)=>{
                                setPublish(!publish)
                                fetch('http://localhost:3000/api/companies?param=publish',{method:'POST',body:JSON.stringify({active:!publish,id_job_offer:offer.id_job_offer})})
                            }} />
                            <label className="form-check-label" >Publier</label>
                        </div>
                    </div>
                </div>
            </div>
            {modalType == "edit" ?  <ModalOffer
             modal={modal} setmodal={setmodal} setJob_offer={setJob_offer} job_offer={job_offer}  update={update}
              jobs={jobs} job_val={job_val} setJob_val={setJob_val}
              change={change} setChange={setChange} 
              test={job_offer.title_job}
             /> : 
            <ModalOffer
             modal={modal} setmodal={setmodal} setJob_offer={setJob_offer_create} update={add} 
             job_offer={job_offer_create} jobs={jobs} job_val={job_val} setJob_val={setJob_val}
             change={change} setChange={setChange} 
             />}

        </>
    );

};
export const ModalOffer = ({modal, setmodal,job_offer, setJob_offer, jobs, job_val, setJob_val,update, setChange,change,test})=>{
    console.log(jobs)
    if(job_offer!=undefined && jobs !=undefined){
        
        return(
            <div className="modal" style={{display:(modal ? 'block' : 'none')}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                        <label  className="col-form-label">Titre de l'offre</label>
                            <input type="text" className='form-control' value={job_offer.title_offer} onChange={(e)=>{
                                setJob_offer((prev)=>({
                                    ...prev,
                                    title_offer:e.target.value
                                }))
                            }} />
                            <button type="button"  onClick={()=>{setmodal(!modal)}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="title2">
                                
                            {job_offer.title_job != undefined ? <input type="text" className='form-control my-2' disabled value={job_offer.title_job} onChange={(e)=>{}} /> :  <div className="form-floating">
                                <select className="form-select" value={job_val} onChange={(e)=>{
                                    setJob_val(e.target.value)
                                    console.log(e.target.value)
                                }} id="floatingSelect" aria-label="Poste créé">
                                    {jobs.map(job=>{
                                       return <option key={job.id_job} value={job.id_job}>{job.title}</option>
                                    })}
                                    
                                </select>
                                <label >Postes disponible</label>
                            </div>}
                            </div>
                            <div className="content">
                            <label  className="col-form-label">Description</label>
                                <textarea name="" className='form-control'  id="" cols="30" rows="10" type="text" value={job_offer.description} onChange={(e)=>{
                                setJob_offer((prev)=>({
                                    ...prev,
                                    description:e.target.value
                                }))
                            }}>
    
                                </textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={()=>{
                                setmodal(!modal)}} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={()=>{
                                update();
                                setmodal(!modal)
                                setChange(change+1)
                            }} className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }else{
        return''
    }
}
export default Company_offer_card;