import React, { useEffect, useState } from 'react';

const Application_user = ({user}) => {
   const [application,setApplication] = useState('')
   
   useEffect(() => {
    let url = "http://localhost:3000/api/users?param=applications";
    fetch(url,{method:"POST",body:JSON.stringify({ref1:user.ref1})}).then(res=>res.json()).then(res=>setApplication(res))
    
   }, []);
const dayBetween = (dateToCompare)=>{
    var today = new Date(); 
    var created_at = new Date(dateToCompare); 
    var Diff_temps =  today.getTime() - created_at.getTime()
    var Diff_jours = Diff_temps / (1000 * 3600 * 24); 
    return Math.round(Diff_jours)
}
// console.log(application)
   if(application.length > 0){

       return (
           <div className='d-flex flex-wrap justify-content-center'>
               {application.map(job=>{
                let response;
                if(job.status == 0) response = {message:'En attente',color:'text-warning'}
                if(job.status == 1) response = {message:'Accepté',color:'text-success'}
                if(job.status == 2) response = {message:'Refusé',color:'text-danger'}
                   return <div className='card col-3 m-1' key={job.id_application}>
                    <div className="card-header">
                        <h3>{job.title}</h3>
                    </div>

                    <div className="card-body">
                    
                       <div className='card-title'>
                       <h5>{job.name}</h5>
                       </div>
                       <p className='card-text'>{job.description}</p>
                       
                       <p className='card-text'>Status: <span className={ response.color}>{response.message}</span></p>
                   </div>
                       <div className="card-footer text-muted">
                          Il y a {dayBetween(job.created_at)} jours
                        </div>
                   </div>
                
               })}
           </div>
       );
   }else{
    return(
        <div>test</div>
    )
   }
};


export default Application_user;