import React, { useState } from 'react';
import Alert_input from './Alert_input';
import style from '/styles/Offerapplication.module.css'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";


const offerapplication = ({user,id}) => {
    let validMail = ()=>{
        let regex = /^[\w-\.]+@([\w-])+[.]+[\w-]{2,3}$/
        if(email.match(regex) != null)
            return true;
        else
            setAlert_message({email:"Le mail est invalid"}); return false;
    }
    const [lastname, setlastname] = useState(user?.lastname);
    const [name, setname] = useState(user?.name);
    const [email, setemail] = useState(user?.mail);
    const [phone, setphone] = useState(user?.phone);
    const [cv, setcv] = useState(user?.cv);
    const [user_id, setuserid] = useState(user?.ref1);
    const [job_offer_id, setjobofferid] = useState(id);
    const [userForm, setuserForm] = useState(false);
    const [alert_message, setAlert_message] = useState({email:"",password:""})
    
    const options = {
        headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        },
        method:"POST",
        body:""
    }
    const register = (e)=>{
        e.preventDefault(); 
        if(validMail()){
            options.body = JSON.stringify({lastname:lastname,firstname:name,email:email,phone:phone,user_id:user_id,job_offer_id:id})
            fetch('http://localhost:3000/api/users?param=apply',options).then(res=>res.json()).then(res=>res)
            console.log(options);
        }else{
            console.log("debug")
        }
    }
    return (
        <div>
            
    <form action="" onSubmit={e=>register(e)} className={style.form2}>
        <AiOutlineClose className={style?.exit} onClick={closeapply}/>
      <div className={style?.title}>Postulez facilement</div>
      <div className={style.input_container_ic1}>
      <input className={style?.input} type="text" defaultValue={user?.lastname} onChange={(e)=>setlastname(e.target.value)} placeholder="Nom" required />
        <div className={style.cut}></div>
        <label className={style.placeholder}>Nom</label>
      </div>
      <div className={style.input_container_ic2}>
      <input className={style?.input} type="text" defaultValue={user?.name} onChange={(e)=>setname(e.target.value)} placeholder="Prénom" required />
        <div className={style.cut}></div>
        <label className={style.placeholder}>Prénom</label>
      </div>
      <div className={style.input_container_ic2}>
      <input className={style?.input} type="email" defaultValue={user?.mail} onChange={(e)=>setemail(e.target.value)} placeholder="Email" required />
        <div className={style.cut_short}></div>
        <label  className={style.placeholder}>Email</label>
      </div>
      <div className={style.input_container_ic2}>
      <input className={style?.input} type="tel" defaultValue={user?.phone} onChange={(e)=>setphone(e.target.value)} placeholder="Téléphone" required />
        <div className={style.cut_short}></div>
        <label  className={style.placeholder}>Téléphone</label>
      </div>
      <div className={style.input_container_ic2}>
      <input className={style?.input} type="text" onChange={(e)=>setcv(e.target.value)} placeholder="CV"/>
        <div className={style.cut_short}></div>
        <label  className={style.placeholder}>CV</label>
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

export default offerapplication;