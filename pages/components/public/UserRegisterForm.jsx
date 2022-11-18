import React, { useState } from 'react';
import Alert_input from './Alert_input';
const UserRegisterForm = ({style}) => {
    let validMail = ()=>{
        let regex = /^[\w-\.]+@([\w-])+[.]+[\w-]{2,3}$/
        if(email.match(regex) != null)
            return true;
        else
            setAlert_message({email:"Le mail est invalid"}); return false;
    }
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");
    const [userForm, setuserForm] = useState(false);
    const [alert_message, setAlert_message] = useState({email:"",password:""})
    const checkPass = ()=>{
        let passValid = (password == confirmPass) ? true : false;
        setAlert_message({password:"Les mots de passe ne correspondent pas"}); return passValid;
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
        checkPass() 
        if(validMail()){
            options.body = JSON.stringify({email:email,password:password})
            fetch('http://localhost:3000/api/users?param=inscription',options).then(res=>res.json()).then(res=>res)
        }else{
            
        }
    }
    return (
        <form action="" onSubmit={e=>register(e)} className={style?.form}>
            <hgroup className={style?.hgroup}>
            <h2>Inscription</h2>
            </hgroup>
            <fieldset className={style?.fieldset}>
                <div>
                    <label htmlFor="">Email</label>
                    <input className={style?.input} type="email" placeholder="Courriel" value={email} onChange={(e)=>setemail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="">Mot de passe</label>
                    <input className={style?.input} type="password" placeholder="Mot de passe" value={password} onChange={(e)=>setpassword(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="">Confirmez votre mot de passe</label>
                    <input className={style?.input} type="password" placeholder="Confirmer le Mot de passe" value={confirmPass} onChange={(e)=>setconfirmPass(e.target.value)} required />
                </div>
            </fieldset>
            <button className={style?.button}>Créer un compte</button>
        </form>
    );
};

export default UserRegisterForm;