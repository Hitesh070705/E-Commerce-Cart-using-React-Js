import React, { useContext } from 'react'
import { userContext } from './Context/UserProvider'

const UsingContext = () => {
    const userDetails=useContext(userContext)
  return (
    <>
      <div>
        <h3>Using Context</h3>
        <h4>{userDetails.id} {userDetails.name}</h4>
      </div>
    </>
  )
}

export default UsingContext


//In App.jsx, i need to wrap up this component UsingContext in App under UserProvider like this:
//  <UserProvider>  
//      <UsingContext/>  -> This thing is the prop of UserProvider
//  </UserProvider>
