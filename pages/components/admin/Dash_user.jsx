import React, { useReducer, useEffect, useState } from 'react';
import Application_user from './Application_user';
import Navbar from '../public/Navbar'
import Profile_user from './Profile_user';
const Dash_user = ({user}) => {
    const [page, setPage] = useState(<Profile_user user={user}/>)
    const [showSideBard,setShowSideBar] = useState(false)
    return (
        <div>
            <Navbar navStatus = {showSideBard} setNav = {setShowSideBar} />
            <ul className="nav justify-content-center">
                <li className="nav-item" onClick={()=>{
                    setPage(<Profile_user user={user}/>)
                }}><a className="nav-link active" aria-current="page">Profile</a></li>
                <li className="nav-item" onClick={()=>{
                    setPage(<Application_user user={user}/>)
                }}> <a className="nav-link">Mes candidatures</a></li>
            </ul>
            <div className='container'>
                {page}
            </div>
        </div>
    );
};

export default Dash_user;