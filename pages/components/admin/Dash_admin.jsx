import { signOut } from 'next-auth/react';
import React, { useState } from 'react';
import '../../../styles/Dash_admin.module.css'
import Company_panel from './Company_panel';
import Offers_panel from './Offers_panel';
import Profile_company from './Profile_company';
import User_panel from './User_panel';
import Profile_user from './Profile_user'
const Dash_admin = ({user}) => {
    const [page, setPage] = useState(<Profile_user user={user}/> )
    const activeLink = (e)=>{
        document.querySelector('.active').classList.remove('active', 'bg-dark', 'rounded')
        e.target.classList.add('active', 'bg-dark', 'rounded')
    }
    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="/">JobandI</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                <button className="btn btn-danger" onClick={async ()=>{
                    signOut().then(res=> window.location.replace('/'))
                }} href="">Déconnexion</button>
                </div>
            </div>
            </header>

            <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link bg-dark rounded active" aria-current="page" onClick={(e)=>{
                            setPage(<Profile_user user={user}/>)
                            activeLink(e)
                        }}>
                        <span data-feather="home" className="align-text-bottom"></span>
                        Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={(e)=>{
                            setPage(<User_panel user={user}/>)
                            activeLink(e)
                        }}>
                        <span data-feather="file" className="align-text-bottom"></span>
                        Utilisateurs
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" onClick={(e)=>{
                            setPage(<Company_panel user={user}/>)
                            activeLink(e)
                        }}>
                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                        Entreprises
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={(e)=>{
                            setPage(<Offers_panel user={user}/>)
                            
                            activeLink(e)
                        }}>
                        <span data-feather="users" className="align-text-bottom"></span>
                        Offres d'emploi
                        </a>
                    </li>
                    </ul>
                </div>
                </nav>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar" className="align-text-bottom"></span>
                        This week
                    </button>
                    </div>
                </div>
                    {page}
                
                </main>
            </div>
            </div>
        </div>
    );
};

export default Dash_admin;