import React, { useReducer, useState } from 'react';
import style from '../styles/Connexion.module.css'
import {setUser} from '../config/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const Connexion = () => {
    const User = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("")
    const [userForm, setuserForm] = useState(true);
const connexion= (e)=>{
    e.preventDefault();
    let url = userForm ? "http://localhost:3000/api/users?param=connexion" : "http://localhost:3000/api/companies?param=connexion";
    let init = {
        method:"POST",
        body:JSON.stringify({mail:email,password:password})
    }
    fetch(url,init).then(res=>res.json()).then(res=>{
        window.sessionStorage.setItem('U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=',JSON.stringify({ref1:res.ref1,status:res.status}))
        dispatch(setUser(res))
    })
 }
    return (
        <div>
            <form action="" onSubmit={e=>connexion(e)} className={style?.form}>
                <hgroup className={style?.hgroup}>
                <div className={style.switch_container}>
                        <label className={style.switch}>
                            <input type="checkbox" value={userForm} onChange={(e)=>setuserForm(!userForm)}/>
                            <span className={`${style.slider} ${style.round}`}></span>
                        </label>
                        <h2>Connexion: {(userForm ? "Utilisateur" : "Entreprise")}</h2>
                    </div>
                </hgroup>
                <fieldset className={style?.fieldset}>
                    <div>
                        <label htmlFor="">Email</label>
                        <input className={style?.input} type="email" placeholder="Courriel" value={email} onChange={(e)=>setemail(e.target.value)} required />
                        
                    </div>
                    <div>
                        <label htmlFor="">mot de passe</label>
                        <input className={style?.input} type="password" placeholder="Mot de passe" value={password} onChange={(e)=>setpassword(e.target.value)} required />
                        
                    </div>
                    
                </fieldset>
                <button className={style?.button}>Connexion</button>
            </form>
        </div>
    );
};

export default Connexion;