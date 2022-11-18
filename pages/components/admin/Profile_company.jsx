import React, { useEffect, useReducer, useState } from 'react';
import UserContext, {userReducer} from '../../../config/UserContext'

const Profile_company = ({user}) => {
    
    const [companyInputs, setCompanyInputs] = useState({
        name: user.name, 
        place: user.place, 
        email: user.mail, 
        password:"", 
        web:user.web, 
        about:user.about, 
        city:user.city,
        ref1:user.ref1 
    });

    const options = {
        headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        },
        method:"POST",
        body:""
    }
    const register = (e)=>{
        e.preventDefault(); 
        console.log(user)
        options.body = JSON.stringify(companyInputs)
        fetch('http://localhost:3000/api/companies?param=update',options).then(res=>res.json()).then(res=>res)
    }
    
    return (
        <div>
            <form className="row g-3" onSubmit={(e)=>register(e)}>
                <div className='col-6'>
                    <label htmlFor="" className='form-label'>Société</label>
                    <input type="text" className='form-control' value={companyInputs.name} onChange={(e)=>{
                         setCompanyInputs((prev)=>({
                            ...prev,
                            name:e.target.value
                        }))
                    }} />
                </div>
                <div className='col-6'>
                    <label htmlFor="" className='form-label'>E-mail</label>
                    <input className='form-control' type="email" value={companyInputs.email} onChange={(e)=>{
                         setCompanyInputs((prev)=>({
                            ...prev,
                            email:e.target.value
                        }))
                    }} />
                </div>
                <div className='col-6'>
                    <label htmlFor="" className='form-label'>Mots de passe</label>
                    <input className='form-control' type="text" value={companyInputs.password} onChange={(e)=>{
                         setCompanyInputs((prev)=>({
                            ...prev,
                            password:e.target.value
                        }))
                    }} />
                </div>
                <div className='col-6'>
                    <label htmlFor="" className='form-label'>Adresse</label>
                    <input className='form-control' type="text" value={companyInputs.place} onChange={(e)=>{
                         setCompanyInputs((prev)=>({
                            ...prev,
                            place:e.target.value
                        }))
                    }} />
                </div>
                <div className='col-6'>
                    <label htmlFor="" className='form-label'>Ville</label>
                    <input className='form-control' type="text" value={companyInputs.city} onChange={(e)=>{
                         setCompanyInputs((prev)=>({
                            ...prev,
                            city:e.target.value
                        }))
                    }} />
                </div>
                <div className='col-6'>
                    <label htmlFor="" className='form-label'>site web</label>
                    <input className='form-control' type="text" value={companyInputs.web} onChange={(e)=>{
                         setCompanyInputs((prev)=>({
                            ...prev,
                            web:e.target.value
                        }))
                    }} />
                </div>
                <div className='col-6'>
                    <label htmlFor="" className='form-label'>À propos de nous</label>
                    <textarea className='form-control' cols="30" rows="10" value={companyInputs.about} onChange={(e)=>{
                         setCompanyInputs((prev)=>({
                            ...prev,
                            about:e.target.value
                        }))
                    }} >

                    </textarea>
                </div>
                <div className='col-6'>
                    <label htmlFor="" className='form-label'>Photo de profile</label>
                    <input className='form-control' type="file" />
                </div>
                <div className="d-flex justify-content-center p-3">
                    <button className='btn btn-primary ' type='submit'>Enregistrer</button>
                </div>
            </form>
        </div>
    );
};

export default Profile_company;