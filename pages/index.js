import Navbar from "./components/public/Navbar"
import Sidebar from './components/public/Sidebar'
import Footer from "./components/public/Footer"
import { useState,useEffect } from "react"
import DetailOffer from "./components/public/DetailOffer"
import OfferCard from "./components/public/OfferCard"
import style from "../styles/Home.module.css"
import Research from './components/public/Research'
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from '../config/userSlice'
import { useSession, signIn, signOut } from "next-auth/react"
import Offerapplication from "./components/public/Offerapplication"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { user } from "../config/db_config"
import Offerapplicationnouser from "./components/public/Offerapplicationnouser"


export default function Home({offers,user}) {
 
  const { data: session, status } = useSession()
  

  
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
  const [showApplyForm, setShowApplyForm] = useState(false)
  return (
    <div>
      <Navbar navStatus = {showSideBard} setNav = {setShowSideBar} />
      <Sidebar navStatus = {showSideBard} setNav = {setShowSideBar} />
      <div className={style.home}>
        <div className={style.applicationContainer} id="applycontainer" style={{visibility: 'hidden'}}>
          
          <div className={style.offerapplicationContainer} id="applyuser" style={{visibility: 'hidden'}}>
          <Offerapplication id={offer.id_job_offer} user={user}/>
          </div>
          <div className={style.offerapplicationnouserContainer} id="applynouser" style={{visibility: 'hidden'}}>
          <Offerapplicationnouser id={offer.id_job_offer} />
          </div>
        </div>
        <div className={style.offer_container}>
          {
            offers.map((offer)=>  <OfferCard key={offer.id_job_offer} offer = {offer} setDetail={hideDetail} detailStatus={showDetailOffer} changeOffer={changeOfferDetail} /> )
          }
        </div>
        <div  className={style.detail_offer_container}>
          <DetailOffer offer={offer} detailStatus={showDetailOffer} setDetail={hideDetail} session={session}/>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context){
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/companies?param=offersHome`)
  const offers = await res.json()
  // Pass data to the page via props
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
)
if (session == null) {

} else {
  
  let url = session.user.email == 2 ? "http://localhost:3000/api/companies?param=companyId" : "http://localhost:3000/api/users?param=userId";
  const res2 = await fetch(url,{method:"POST",body:JSON.stringify({ref1:session.user.name})})
  const user = await res2.json()
  return {
    props: {
     offers,
     session,
     user
   }
}
}
  return {
       props: {
        offers,
        session,
        user
      }
  }


}
