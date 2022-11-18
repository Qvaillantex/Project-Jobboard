import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
export const authOptions = {
  // Configure one or more authentication providers
  session:{
    strategy:'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials:{},
      async authorize(credentials,req){
        const { email, password, url } = credentials;
        let data = await fetch(url,{method:"POST",body:JSON.stringify({mail:email,password:password})}).then(async res=>{
          let result = await res.json()
          result.status = res.status;
          return result;
        }).then(res=>res)
        let result =  data.status == 200 ? { name: data.ref1,email: data.ref2, image: 'null'} : null;
        
        return result
      }
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/signin',
    
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials,url }) {
    
      return true
    },
    // async redirect({ url, baseUrl }) {
    //   // return baseUrl+"/Dashboard"
    // },
    // async session({ session, user, token }) {
    //   return session
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token
    // }
  }
 
}

export default NextAuth(authOptions)