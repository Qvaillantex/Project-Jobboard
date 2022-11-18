import React, { useEffect, useState } from 'react';
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Dash_companies from './components/admin/Dash_companies';
import Dash_user from './components/admin/Dash_user';
import Sidebar from './components/public/Sidebar'
import Footer from './components/public/Footer'
import { useSession, getSession } from "next-auth/react"
import Dash_admin from './components/admin/Dash_admin';
const Dashboard = (props) => {
   
    const { data: session,status } = useSession()
    const [board, setboard] = useState("Connexion down");
    const [showSideBard,setShowSideBar] = useState(false)
    
    
  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }

  const {user} = props;

  useEffect(() => {
    switch(user.ref2){
        case 1:
            setboard(<Dash_admin user={user}/>)
        break;
        case 2:
            setboard(<Dash_companies user={user}/>)
        break;
        case 3:
            setboard(<Dash_user user={user}/>)
        break;
    }
  }, []);
    

    return (
        <div>
            <Sidebar navStatus = {showSideBard} setNav = {setShowSideBar} />
           {board}
           <Footer />
        </div>
    );
};
export async function getServerSideProps(context){
    
    // Fetch data from external API
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    )
    if(session != null){

        let url = session.user.email == 3 || session.user.email == 1 ? "http://localhost:3000/api/users?param=userId" : "http://localhost:3000/api/companies?param=companyId";
        const res = await fetch(url,{method:"POST",body:JSON.stringify({ref1:session.user.name})})
        const user = await res.json()
       
        // Pass data to the page via props
        
        return {
            props: {
                user,
                session,
                
            }
        }
    }else{
        return {
            props: {
                user:{err:'yep'},
                session,
                
            }
        }
    }
}

export default Dashboard;