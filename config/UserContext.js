import React, { useEffect, useReducer } from 'react'


export function userReducer(state, action) {
    let user;
  switch (action.type) {
    case 'connect':
        
        window.sessionStorage.setItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=",JSON.stringify(action.payload))
      return {user: action};
    case 'disconnect':
        window.sessionStorage.setItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=",JSON.stringify({"U2FsdGVkX19QLOuei43jB+TbLk5oDRnMPnPNzUSGI7I=": 0,active: 0}))
    case 'user':
        return JSON.parse(window.sessionStorage.getItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw="));
    case 'init':
        if(window.sessionStorage.getItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=") == null) {
            window.sessionStorage.setItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=",JSON.stringify({"U2FsdGVkX19QLOuei43jB+TbLk5oDRnMPnPNzUSGI7I=": 0,active: 0,}))
            return JSON.parse(window.sessionStorage.getItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw="))
        }
        else
            return JSON.parse(window.sessionStorage.getItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw="));
    case 'reset':
         user = JSON.parse(window.sessionStorage.getItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw="))
        fetch("http://localhost:3000/api/users?param=userId",{
            method:"POST",
            body:JSON.stringify({ref1:user.ref1})
        }).then(res=>res.json()).then(res=>{
            
            window.sessionStorage.setItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=",JSON.stringify(res))
        })
    case 'reset_company':
         user = JSON.parse(window.sessionStorage.getItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw="))
        fetch("http://localhost:3000/api/companies?param=companyId",{
            method:"POST",
            body:JSON.stringify({ref1:user.ref1})
        }).then(res=>res.json()).then(res=>{
            
            window.sessionStorage.setItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=",JSON.stringify(res))
        })
         
            
        
  }
}
export const UserContext = React.createContext()
