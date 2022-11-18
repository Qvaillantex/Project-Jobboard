import React, { useEffect, useState } from 'react';
import Modal_admin from './Modal_admin';
import {FaPencilAlt} from 'react-icons/fa'
import {RiDeleteBin5Fill} from 'react-icons/ri'
const Company_panel = ({user}) => {
    const [users, setusers] = useState("");
    const [name, setname] = useState("");
    const [change,setChange] = useState(1)
    let inputs1 = [
        {type:"text",label:"Nom de la société",value:""},
        {type:"text",label:"Addresse",value:""},
        {type:"text",label:"Ville",value:""},
        {type:"email",label:"E-mail",value:""},
        {type:"password",label:"Mots de passe",value:""},
        {type:"textarea",label:"À propos",value:""},
    ]
    let buttons1 = [
        {value:"ajouter", className:'btn btn-success', action:(data)=>save(data)}
    ]
    let save = (e)=>{
        let data= {
            name:e[0].value,
            place:e[1].value,
            city:e[2].value,
            email:e[3].value,
            password:e[4].value,
            about:e[5].value,
            // id_job_offer:offer.id_job_offer,
        }
        fetch('http://localhost:3000/api/companies?param=inscription',{method:"POST",body:JSON.stringify(data)}).then(res=>res.json()).then(res=>{
            setChange(change+1)
            return res
        })
    }
    useEffect(() => {
        fetch("http://localhost:3000/api/companies").then(res=>res.json()).then(res=>setusers(res))
    }, [change]);
   
    if(users != "" ){
   
        return (
            <div>
                
                <h2>Administration des Entreprises</h2>
                <a href="#" onClick={()=>{
                    document.querySelector(`#modal-${user.ref1}`).style.display = 'block'
                   
                }} className="btn btn-success m-2">Ajouter une entreprise</a>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th scope="col">Action</th>
                            <th scope="col">ID</th>
                            <th scope="col">Société</th>
                            <th scope="col">Ville</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Mot de passe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,index)=>{
                               
                                
                               let action = (e)=>{
                                    let data= {
                                        name:e[0].value,
                                        city:e[1].value,
                                        email:e[2].value,
                                        place:user.Place,
                                        password:'',
                                        web:user.website,
                                        about:user.about,
                                        ref1:user.id_company
                                    }
                                    fetch('http://localhost:3000/api/companies?param=update',{method:"POST",body:JSON.stringify(data)}).then(res=>res.json()).then(res=>{
                                        setChange(change+1)
                                        return res
                                    })
                               }
                               let remove = (data)=>{
                                    fetch('http://localhost:3000/api/companies?param=deleteCompany',{method:"POST",body:JSON.stringify({ref1:user.id_company})}).then(res=>res.json()).then(res=>{
                                        setChange(change+1)
                                        return res;
                                    })
                                }
                               let inputs = [
                                    {type:"text",label:"Société",value:user.name},
                                    {type:"text",label:"Ville",value:user.city},
                                    {type:"text",label:"Mots de passe",value:user.password},
                                    {type:"text",label:"E-mail",value:user.mail}
                                ]
                                let buttons = [
                                    {value:"modifier", className:'btn btn-warning', action:(data)=>action(data)}
                                ]
                                 
                                return <>
                                        <tr key={index}>
                                            <td>
                                                
                                                <button className='btn btn-warning mx-1' onClick={
                                                    ()=>{
                                                        document.querySelector(`#modal-${user.id_company}`).style.display = 'block'
                                                    }
                                                }>
                                                    <FaPencilAlt />
                                                </button>
                                                <button 
                                                    onClick={()=>remove()}
                                                    className='btn btn-danger mx-1'>
                                                    <RiDeleteBin5Fill />
                                                </button>
                                                
                                            </td>
                                            <td>{user.id_company}</td>
                                            <td>{user.name}</td>
                                            <td>{user.city}</td>
                                            <td>{user.password}</td>
                                            <td>{user.mail}</td>
                                        </tr>
                                        <Modal_admin key={user.id_company} title="Modifier une entreprise" inputs ={inputs} buttons={buttons} data={user} id={user.id_company} action={action}/>
                                    </>
                            })}
                        
                        </tbody>
                        </table>
                    </div>
                    <Modal_admin id={user.ref1} inputs={inputs1} title="Ajouter une entreprise" buttons={buttons1} data={user} action={save}/>
            </div>
        );
    }else{
        return(
            <div>
                loading
            </div>
        )
    }
};

export default Company_panel;