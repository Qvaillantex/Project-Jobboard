import React, { useEffect, useState } from 'react';
import {FaPencilAlt} from 'react-icons/fa'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import Modal_admin from './Modal_admin';

const User_panel = ({user}) => {
    const [users, setusers] = useState("");
    const [change,setChange] = useState(1)
    let inputs1 = [
        {type:"email",label:"E-mail",value:""},
        {type:"password",label:"Mots de passe",value:""},
    ]
    let buttons1 = [
        {value:"ajouter", className:'btn btn-success', action:(data)=>save(data)}
    ]
    let save = (e)=>{
        let data= {
            
            email:e[0].value,
            password:e[1].value,
            
            // id_job_offer:offer.id_job_offer,
        }
        fetch('http://localhost:3000/api/users?param=inscription',{method:"POST",body:JSON.stringify(data)}).then(res=>res.json()).then(res=>{
            setChange(change+1)
            return res
        })
    }
    useEffect(() => {
        fetch("http://localhost:3000/api/users?param=users").then(res=>res.json()).then(res=>setusers(res))
    }, [change]);
   
    if(users != "" ){  
        return (
            <div>
                <h2>Administration des Candidats</h2>
                <a href="#" onClick={()=>{
                    document.querySelector(`#modal-${user.ref1}`).style.display = 'block'
                   
                }} className="btn btn-success m-2">Ajouter un Candidat</a>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th scope="col">Action</th>
                            <th scope="col">ID</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Nom</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Mot de passe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((ref,index)=>{
                                
                               
                                let action = (e)=>{
                                    let data= {
                                        firstname:e[0].value,
                                        lastname:e[1].value,
                                        email:e[2].value,
                                        ref1:ref.id_user
                                    }
                                    fetch('http://localhost:3000/api/users?param=update',{method:"POST",body:JSON.stringify(data)}).then(res=>res.json()).then(res=>{
                                        setChange(change+1)
                                        return res
                                    })
                               }
                               let remove = (data)=>{
                                    fetch('http://localhost:3000/api/users?param=deleteUser',{method:"POST",body:JSON.stringify({ref1:ref.id_user})}).then(res=>res.json()).then(res=>{
                                        setChange(change+1)
                                        return res;
                                    })
                                }
                               let inputs = [
                                    {type:"text",label:"Prénom",value:ref.firstname},
                                    {type:"text",label:"Nom",value:ref.lastname},
                                    {type:"text",label:"Mots de passe",value:ref.password},
                                    {type:"text",label:"E-mail",value:ref.mail}
                                ]
                                let buttons = [
                                    {value:"modifier", className:'btn btn-warning', action:(data)=>action(data)}
                                ]
                                if(ref.id_user != user.ref1){
                                   
                                    return <tr key={index}>
                                                <td>
                                                    
                                                    <button className='btn btn-warning mx-1' onClick={
                                                        ()=>{
                                                            document.querySelector(`#modal-${ref.id_user}`).style.display = 'block'
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
                                        <td>{ref.id_user}</td>
                                        <td>{ref.firstname}</td>
                                        <td>{ref.lastname}</td>
                                        <td>{ref.password}</td>
                                        <td>{ref.mail}</td>
                                        <Modal_admin key={ref.id_user} title="Modifier une candidat" inputs ={inputs} buttons={buttons} data={user} id={ref.id_user} action={action}/>
                                    </tr>
                                }
                            })}
                        
                        </tbody>
                        </table>
                    </div>
                    <Modal_admin id={user.ref1} title="Créer un candidat" inputs={inputs1} buttons={buttons1} data={user} action={save}/>
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

export default User_panel;