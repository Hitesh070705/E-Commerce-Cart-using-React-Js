import { createContext } from "react";

export const userContext=createContext()

export const UserProvider=(props)=>{
    const {children}=props
    const userDetails={
        id:101,
        name:"Hitesh",
        age:"18"
    }
    return <userContext.Provider value={userDetails}>{children}</userContext.Provider>
}




