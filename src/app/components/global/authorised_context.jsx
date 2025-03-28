"use client"
import React, { useState } from "react";
import AuthorisationContext from "./auth_context";

const AuthorisationProvider = ({children}) => {
    const [authorised, setAuthorised] = useState(false);

    return(
        <AuthorisationContext.Provider value={{authorised, setAuthorised}}>
            {children}
        </AuthorisationContext.Provider>
    )
} 

export default AuthorisationProvider;