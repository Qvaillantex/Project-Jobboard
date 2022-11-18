import React, { useState } from 'react';
import style from '/styles/Offerapplication.module.css'
import { AiOutlineClose } from "react-icons/ai";

const offerapplicationnouser = ({id}) => {
    let validMail = ()=>{
        let regex = /^[\w-\.]+@([\w-])+[.]+[\w-]{2,3}$/
        if(email.match(regex) != null)
            return true;
        else
            setAlert_message({email:"Le mail est invalid"}); return false;
    }
    const [lastname, setlastname] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [cv, setcv] = useState("");
    const [user_id, setuserid] = useState("");
    const [job_offer_id, setjobofferid] = useState(id);
    const [userForm, setuserForm] = useState(false);
    const [password, setpassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");
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
            options.body = JSON.stringify({lastname:lastname,firstname:name,email:email,phone:phone,job_offer_id:id,password:password})
            fetch('http://localhost:3000/api/users?param=applynouser',options).then(res=>res.json()).then(res=>res)
            console.log(options);
        }else{
            console.log("debug")
        }
    }
    return (
        <div>

    <form action="" onSubmit={e=>register(e)} className={style.form}>
        <AiOutlineClose className={style?.exit} onClick={closeapply}/>
      <div className={style?.title}></div>
      <div className={style.subtitle}>Vous n'avez pas encore de compte il sera créé en même temps que votre candidature</div>
      <div className={style.input_container_ic1}>
      <input className={style?.input} type="text" placeholder="Nom" onChange={(e)=>setlastname(e.target.value)} required />
        <div className={style.cut}></div>
        <label  className={style.placeholder}>Nom</label>
      </div>
      <div className={style.input_container_ic2}>
      <input className={style?.input} type="text" placeholder="Prénom" onChange={(e)=>setname(e.target.value)} required />
        <div className={style.cut}></div>
        <label className={style.placeholder}>Prénom</label>
      </div>
      <div className={style.input_container_ic2}>
      <input className={style?.input} type="email" placeholder="Courriel" onChange={(e)=>setemail(e.target.value)} required />
        <div className={style.cut_short}></div>
        <label  className={style.placeholder}>Email</label>
      </div>
      <div className={style.input_container_ic2}>
      <input className={style?.input} type="password" placeholder="Mot de passe" value={password} onChange={(e)=>setpassword(e.target.value)} required />
        <div className={style.cut_short}></div>
        <label  className={style.placeholder}>Mot de passe</label>
      </div>
      <div className={style.input_container_ic2}>
      <input className={style?.input} type="password" placeholder="Confirmer le Mot de passe" value={confirmPass} onChange={(e)=>setconfirmPass(e.target.value)} required />
        <div className={style.cut_short}></div>
        <label  className={style.placeholder}>Confirmez mot de passe</label>
      </div>
      <div className={style.input_container_ic2}>
      <input className={style?.input} type="tel" placeholder="Téléphone" onChange={(e)=>setphone(e.target.value)} required />
        <div className={style.cut_short}></div>
        <label className={style.placeholder}>Téléphone</label>
      </div>
      <div className={style.input_container_ic2}>
      <input className={style?.input} type="text" placeholder="CV" onChange={(e)=>setcv(e.target.value)}/>
        <div className={style.cut_short}></div>
        <label className={style.placeholder}>CV</label>
      </div>
      <button type="text" className={style.submit}>Postuler</button>
    </form>
        </div>
    );
};

function closeapply() {
    const applycontainer = document.getElementById("applycontainer")
    const applyuser = document.getElementById("applyuser");
    const applynouser = document.getElementById("applynouser");
    applyuser.style.visibility = "hidden";
    applynouser.style.visibility = "hidden";
    applycontainer.style.visibility ="hidden"
}

export default offerapplicationnouser;