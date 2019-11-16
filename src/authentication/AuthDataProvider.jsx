import React, {
    createContext,
    useState,
    useMemo,
    useContext
} from "react";

const initialState = { user: null };

const AuthDataProvider = props => {
    const [user, setUser] = useState(initialState)

    const onLogout = () => setUser({ user: null })

    const onLogin = data => setUser(data)

    // remember the auth dataset result every time 'auth' is changing
    const auth = useMemo(() => ({
        ...user,
        onLogin,
        onLogout
    }), [user])

    return <AuthContext.Provider value={auth} {...props} />
}

export const AuthContext = createContext()
// here is a custom hooks (just delegates the useContext)
export const useAuthContext = () => useContext(AuthContext)

export default AuthDataProvider
