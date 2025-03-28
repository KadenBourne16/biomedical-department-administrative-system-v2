import {createContext} from 'react'

const AuthorisationContext = createContext({
    authorised: false,
    setAuthorised: () => {}
})

export default AuthorisationContext;

