import style from '../../styles/Company_detail.module.css'
import Sidebar from '../components/public/Sidebar'
import Navbar from '../components/public/Navbar'
import Footer from '../components/public/Footer'
import { useState } from 'react'
import Image from 'next/image'
import Aboutus from '../components/public/AboutUs'
import Offer from '../components/public/Offer'
import Companynav from '../components/public/CompanyNav'

const Company_detail = (props)=>{
    let company = props.company[0]
    let offer = props.id
    let joboffer = props.jo
    const [showSideBard,setShowSideBar] = useState(false)
    console.log(props)
    let bg = ["bg1.jpg","bg2.webp","bg3.jpg","bg4.jpg"]
    
    let current_bg = bg[ Math.floor(Math.random() * 4)];
    return(
        <div>
            <Navbar navStatus = {showSideBard} setNav = {setShowSideBar} />
            <Sidebar navStatus = {showSideBard} setNav = {setShowSideBar} />
            <div>
                <div className={style.header}>
                    <ul className={style.sub_header}>
                        <li><a onClick={displayapropos} className="presentation" id="apropos" style={{color: 'red'}}>A propos</a></li>
                        <li><a onClick={displayoffer} className="offer" id="nosoffres">Nos offres</a></li>
                        <li><a className="spontanee">Candidature spontanée</a></li>
                    </ul>
                </div>
                <div className={style.body}>
                    <div className={style.aboutus} id="aboutus">
                        <Aboutus company={company}/>
                    </div>
                    <div className={style.offer} id="offers" style={{visibility: 'hidden'}}>
                        {/* <Offer offer={offer}/> */}
                    </div>
                </div>
                <div className={style.footer}>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export async function  getServerSideProps(context){
    let data = await fetch("http://localhost:3000/api/companies?param=id&id="+context.params.id).then(res=>res.json()).then(res=>res);
   
    return{
        props: {company : data}
    }
}


function displayoffer() {
    const aboutus = document.getElementById("aboutus");
    const offers = document.getElementById("offers");
    const apropos = document.getElementById("apropos")
    aboutus.style.visibility = "hidden";
    aboutus.style.height = "0";
    offers.style.visibility = "visible";
    apropos.style.color = "black"
    nosoffres.style.color="red"
}
function displayapropos() {
    const aboutus = document.getElementById("aboutus");
    const offers = document.getElementById("offers");
    const apropos = document.getElementById("apropos")
    const nosoffres = document.getElementById("nosoffres")
    aboutus.style.visibility = "visible";
    offers.style.visibility = "hidden";
    aboutus.style.height = "100%";
    apropos.style.color = "red"
    nosoffres.style.color="black"
}

export default Company_detail