import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context, server } from '../main';
import toast from 'react-hot-toast';
import axios from 'axios';

function Login() {
   const {isAuthenticated,setIsAuthenticated,loading,setLoading} = useContext(Context);
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")


   const submitHandler=async (e)=>{
      e.preventDefault()
      setLoading(true)
      try {
         
      // console.log(name,email,password)
      const {data} =  await axios.post(`${server}/users/login`,{
           email,password         
        },{
           headers:{
              "Content-Type":"application/json"
           },
           withCredentials:true,
        })
      //   console.log("Email & Pass : ",email,password)
      //   console.log("data : ",server)
     toast.success(data.message)
      setIsAuthenticated(true)    
      setLoading(false)
      
      
   } catch (error) {
      
      toast.error("Some Error ")
      console.log(error)
      setIsAuthenticated(false)    


      }
   };



   
 
   if(isAuthenticated) return <Navigate to={"/"} /> 


  return (
    <div className='login'>
      <section>
         <form action="" onSubmit={submitHandler}>
         <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email'
            required
         />
         <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'
            required
         />
            <button disabled={loading} type='submit' >Login</button>
            <h4>Or</h4>
            <Link to="/register">Sign Up</Link>
         </form>
      </section>
    </div>
  )
}

export default Login