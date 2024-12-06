import { createContext, useState } from "react";

const AuthContext = createContext({
    signed: false,
    setSigned: () => { },
    userId: "",
    setUserId: () => { },
    userType: "aluno",
    setUserType: () => { },
    refresh: "aluno",
    setRefresh: () => { },
    userToken: "", 
    setUserToken: () => { },
})

export const AuthProvider = ({ children }) => {

    const [signed, setSigned] = useState(false)
    const [userId, setUserId] = useState(false)
    const [userType, setUserType] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [userToken, setUserToken] = useState("")

    const authObject = {
        signed: signed,
        setSigned: setSigned,
        userId: userId,
        setUserId: setUserId,
        userType: userType,
        // userType: 'admin',
        setUserType: setUserType,
        refresh: '',
        setRefresh: setRefresh,
        userToken: userToken, 
        setUserToken: setUserToken,
    }

    return (
        <AuthContext.Provider value={authObject}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;