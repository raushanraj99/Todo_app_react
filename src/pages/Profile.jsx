import React, { useContext } from 'react'
import { Context } from '../main'
import Loader from '../components/Loader'

function Profile() {

   const {isAuthenticated,loading,user} = useContext(Context)

   console.log(user)

  return (
    <div>
      {
         loading?<Loader/>:(
         <div>
            <h1>{user?.name}</h1>
           <p>{user?.email}</p>
         </div>
         )
         
      }
      
      
    </div>
  )
}

export default Profile