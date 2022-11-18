import React, { useState } from 'react';
import CompanyCard from './components/public/CompanyCard';
import Footer from './components/public/Footer';
import Navbar from './components/public/Navbar';
import Sidebar from './components/public/Sidebar';
import style from '../styles/Companies.module.css'
import Compaysearch from './components/public/Companysearch';
import { useSession } from "next-auth/react"

const Company = ({companies}) => {
    const [showSideBard,setShowSideBar] = useState(false)
    const [showDetailOffer, setShowDetailOffer] = useState(false)
    const [offer, setoffer] = useState([]);
    const hideDetail = (element)=>{
      setShowDetailOffer(!showDetailOffer)
      setoffer(element);
    }
    const changeOfferDetail = (element)=>{
      setoffer(element);
      
    }
     
  const { data: session, status } = useSession()
  
  console.log(session)
    const test = [1,2,3,4,5,6,78,9,10];
    return (
        <div>
            <Navbar navStatus = {showSideBard} setNav = {setShowSideBar} />
            <Sidebar navStatus = {showSideBard} setNav = {setShowSideBar} />
            <div className={style.company_card_container}>

                {companies.map(company => <CompanyCard key={company.id_company} company={company} />)}
            </div>
            <Footer /> 
        </div>
    );
};


export async function getServerSideProps(){
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/companies`)
    const companies = await res.json()
    // Pass data to the page via props
    return {
         props: {companies}
    }
}

export default Company;