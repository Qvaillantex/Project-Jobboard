import { signOut } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import Application_company from './Application_company';
import Job_company_dash from './Job_company_dash';
import Offers_company_dash from './Offers_company_dash';
import Profile_company from './Profile_company';
import Navbar from '../public/Navbar'

const Dash_companies = ({user}) => {
    const [page, setPage] = useState(<Profile_company user={user}/> )
    const [showSideBard,setShowSideBar] = useState(false)
    const activeLink = (e)=>{
        console.log(e.target)
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
    }
    return (
        <div>
            <Navbar navStatus = {showSideBard} setNav = {setShowSideBar} />
            <div className='container'>
                <ul className="nav nav-pills nav-fill m-2">
                    <li className="nav-item" onClick={(e)=>{
                        setPage(<Profile_company user={user}/>)
                        activeLink(e)
                    }}><a className='nav-link active'>Profile</a></li>
                    <li className="nav-item" onClick={(e)=>{
                        setPage(<Offers_company_dash user={user}/>)
                        activeLink(e)
                    }}><a className='nav-link'>Mes Offres</a></li>
                    <li className="nav-item" onClick={(e)=>{
                        setPage(<Job_company_dash user={user}/>)
                        activeLink(e)
                    }}><a className='nav-link'>Mes Postes</a></li>
                    <li className="nav-item" onClick={(e)=>{
                        setPage(<Application_company user={user}/>)
                        activeLink(e)
                    }}><a className='nav-link'>Candidatures</a></li>
                </ul>
                <div>
                    {page}
                </div>
            </div>
        </div>
    );
};

export default Dash_companies;