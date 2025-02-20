import { createContext, useContext } from "react";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

//authProvider
// eslint-disable-next-line react/prop-types
export const AuthProvide = ({children}) => {

    const value = {
        
    }
    return (
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    )
}