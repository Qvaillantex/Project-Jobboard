import React, { useState } from 'react';

const CompanyRegisterForm = ({style}) => {
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [place, setplace] = useState("");
    const [city, setcity] = useState("");
    const [about, setabout] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");

    const checkPass = ()=>{
        let passValid = (password == confirmPass) ? true : false;
        return passValid;
    }
    const options = {
        headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        },
        method:"POST",
        body:""
    }
    const register = (e)=>{
        e.preventDefault();
        console.log(e)
        if(checkPass()){
            options.body = JSON.stringify({email:email,password:password,name:name,place:place,city:city,about:about})
            fetch('http://localhost:3000/api/companies?param=inscription',options).then(res=>res.json()).then(res=>res)
        }else{
            console.log('Les mots de passe ne correspondent pas')
        }
    }
    return (
        <form action="" onSubmit={e=>register(e)} className={style?.form}>
                <hgroup className={style?.hgroup}>
                    <h2>Inscription</h2>
                </hgroup>
                <fieldset className={style?.fieldset}>
                    <label htmlFor="">Nom de société</label>
                    <input className={style?.input} type="text" placeholder="name" value={name} onChange={(e)=>setname(e.target.value)} required />
                    <label htmlFor="">Adresse du siège social</label>
                    <input className={style?.input} type="text" placeholder="Adresse" value={place} onChange={(e)=>setplace(e.target.value)} required />
                    <label htmlFor="">Ville</label>
                    <input className={style?.input} type="text" placeholder="city" value={city} onChange={(e)=>setcity(e.target.value)} required />
                    <label htmlFor="">E-mail de contact</label>
                    <input className={style?.input} type="text" placeholder="E-mail" value={email} onChange={(e)=>setemail(e.target.value)} required />
                    <label htmlFor="">Mot de passe</label>
                    <input className={style?.input} type="password" placeholder="Mot de passe" value={password} onChange={(e)=>setpassword(e.target.value)} required />
                    <label htmlFor="">Confirmez le mot de passe</label>
                    <input className={style?.input} type="password" placeholder="Confirmer le Mot de passe" value={confirmPass} onChange={(e)=>setconfirmPass(e.target.value)} required />
                    <label htmlFor="">À propos de votre entreprise</label>
                    <textarea className={style?.input} name="" id="" cols="30" value={about}  onChange={(e)=>setabout(e.target.value)}  rows="10">
                        
                    </textarea>
                </fieldset>
                <button className={style?.button}>Créer un compte</button>
        </form>
    );
};

export default CompanyRegisterForm;