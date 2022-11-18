import React, { useEffect, useState } from 'react';

const Profile_user = ({user}) => {
    
    const [userInputs, setUserInputs] = useState({
        firstname:user.name,
        lastname:user.lastname,
        email:user.mail,
        password:'',
        phone:user.phone,
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
        options.body = JSON.stringify(userInputs)
        fetch('http://localhost:3000/api/users?param=update',options).then(res=>res.json()).then(res=>res)
    }
    
    return (
        <div className='container'>
            <form className="row g-3" onSubmit={(e)=>register(e)}>
                <div className="col-md-6">
                <label htmlFor="" className="form-label">Nom</label>
                    <input type="text" className="form-control" value={userInputs.firstname} onChange={(e)=> {
                        setUserInputs((prev)=>({
                            ...prev,
                            firstname:e.target.value
                        }))
                    
                    }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Prénom</label>
                    <input type="text" className="form-control" value={userInputs.lastname} onChange={(e)=>{
                        setUserInputs((prev)=>({
                            ...prev,
                            lastname:e.target.value
                        }))
                    }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">E-mail</label>
                    <input type="email" className="form-control" value={userInputs.email} onChange={(e)=>{
                        setUserInputs((prev)=>({
                            ...prev,
                            email:e.target.value
                        }))
                    }}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Mots de passe</label>
                    <input type="text" className="form-control" value={userInputs.password} onChange={(e)=>{
                        setUserInputs((prev)=>({
                            ...prev,
                            password:e.target.value
                        }))
                    }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Ville</label>
                    <input type="text" className="form-control" value={userInputs.city} onChange={(e)=>{
                        setUserInputs((prev)=>({
                            ...prev,
                            city:e.target.value
                        }))
                    }} />
                </div>
                <div className="col-md-4">
                <label htmlFor="" className="form-label">Téléphone</label>
                    <input type="number" className="form-control" value={userInputs.phone} onChange={(e)=>{
                        setUserInputs((prev)=>({
                            ...prev,
                            phone:e.target.value
                        }))
                    }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Photo de profile</label>
                    <input type="file" className="form-control" />
                </div>
                <div className="col-md-6">
                <label htmlFor="" className="form-label">Déposer votre cv</label>
                    <input type="file" className="form-control" />
                </div>
                <div className="col-12 my-3">
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                </div>
            </form>
        </div>
    );
};

export default Profile_user;