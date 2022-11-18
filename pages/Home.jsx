import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar'
import Footer from "./components/Footer"
import { useState,useEffect } from "react"
import DetailOffer from "./components/DetailOffer"
import OfferCard from "./components/OfferCard"
import style from "../styles/Home.module.css"
import Research from './components/Research'
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from '../config/userSlice'
export default function Home() {
  const dispatch = (useDispatch())
  const User = useSelector(state => state.user.value)

  useEffect(() => {
    if(window.sessionStorage.getItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=") != null && window.sessionStorage.getItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=").status != undefined){
      let user = JSON.parse(window.sessionStorage.getItem('U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw='))
      let url = user.status ? "http://localhost:3000/api/users?param=userId" : "http://localhost:3000/api/companies?param=companyId";
      let init = {
          method:"POST",
          body: window.sessionStorage.getItem('U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=')
      }
      fetch(url,init).then(res=>res.json()).then(res=>{
        window.sessionStorage.setItem('U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=',JSON.stringify({ref1:res.ref1,status:res.status}))
        dispatch(setUser(res))
      })
    }
  }, []);
  const bitz = [
    {
      title: "Développeur Web",
      company: "Atos",
      start: "26/10/2022",
      city:'Nancy',
      salary: "3600",
      type:"CDI",
      schedule:"35",
      format:"Télétravail",
      content:"Lorem Ipsum is sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  },
  {
    title: "Charpentier",
    company: "Mélizine",
    start: "07/12/2022",
    city:'Metz',
    salary: "1389",
    type:"CDD",
    schedule:"45",
    format:"Présentiel",
    content:"Lorem Ipsum is sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

}
  ]
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
  return (
    <div>
      <Navbar navStatus = {showSideBard} setNav = {setShowSideBar} />
      <Sidebar navStatus = {showSideBard} setNav = {setShowSideBar} />
      <Research />

      <div className={style.home}>
        <div className={style.offer_container}>
          {
            bitz.map((el)=>  <OfferCard key={el.city} offer = {el} setDetail={hideDetail} detailStatus={showDetailOffer} changeOffer={changeOfferDetail} /> )
          }
        </div>
        <div  className={style.detail_offer_container}>
          <DetailOffer offer={offer} detailStatus={showDetailOffer} setDetail={hideDetail}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}
