import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
    user: null,
    isAuthenticated: false
}
const reducer = (state, action) => {
    switch(action.type){
        case "login": 
            return {...state, isAuthenticated: true, user: action.payload}
        case "logout":
            return {...state, isAuthenticated: false, user: null}
        default: throw new Error("Unknown action")
    }

}
const FAKE_USER = {
    name: "jane",
    password: "qwerty",
    email: "jane@example.com",
    avatar: "https://i.pravatar.cc/100?u=zz",
}

function AuthProvider({children}){
    const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState);

    function login(email, password){
        if(email === FAKE_USER.email && password === FAKE_USER.password){
            dispatch({type:"login", payload: FAKE_USER})
        }
    }
    function logout(){
        dispatch({type: "logout"})
    }
    return (
        <AuthContext.Provider value={{user,  isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error("AuthContext was outside AuthProvider");
    };
    return context;
}
export {AuthProvider, useAuth}