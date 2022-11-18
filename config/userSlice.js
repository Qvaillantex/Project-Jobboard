import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
        ref1:0,
    }
  },
  reducers: {
     init: async state => {
        let user = window.sessionStorage.getItem("U2FsdGVkX1+jwTfC0fZPj5FVNVO2CJjhwSyoyUB1kaw=")
        let url = user.status ? "http://localhost:3000/api/companies?param=companyId" : "http://localhost:3000/api/users?param=userId"
        state.value = await fetch(url,{method:"POST",body:user}).then(res=>res.json()).then(res=>res)
    },
    setUser: (state, action) => {
      state.value = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { init, setUser, incrementByAmount } = userSlice.actions

export default userSlice.reducer