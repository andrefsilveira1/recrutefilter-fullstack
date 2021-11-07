import { createContext, useEffect, useState } from "react"
import firebase from "../../Firebase/config"
import Usuario from "../../model/User"
import User from "../../model/User"
import route from "next/router" 
import Cookies from 'js-cookie'

interface AuthContextProps{
    user?: Usuario
    loginGoogle?:() => Promise<void>
    login?:(email:string, senha:string) => Promise<void>
    Register?:(email:string, senha:string) => Promise<void>
    logout?:() => Promise<void>
    loading?: boolean
}

const AuthContext = createContext<AuthContextProps>({})

async function FireUser(usuarioFirebase: firebase.User): Promise<Usuario>{
    const token = await usuarioFirebase.getIdToken()
    return{
        uid: usuarioFirebase.uid,
        name: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        host: usuarioFirebase.providerData[0]?.providerId,
        imageURL: usuarioFirebase.photoURL
    }
}
function ManageCookie(loged: boolean){
    if(loged){
        Cookies.set('admin-template-auth', loged,{
            expires: 7
        })
    }else{
        Cookies.remove('admin-template-auth')
    }

}
export function AuthProvider(props:any){
    const[loading,setLoading] = useState(true)
    const[user,setUser] = useState<User>()
    async function setSection(usuarioFirebase){
        if(usuarioFirebase?.email){
            ManageCookie(true)
            const user = await FireUser(usuarioFirebase)
            setUser(user)
            setLoading(false)
            return user.email
        }else{
            ManageCookie(false)
            setUser(null)
            setLoading(false)
            return false
        }
    }
    async function loginGoogle(){
        try{
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
                await setSection(resp.user)
                route.push('/')
        }finally{
            setLoading(false)
        }
    }
    async function login(email, senha){
        try{
            setLoading(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email,senha)
                await setSection(resp.user)
                route.push('/')
        }finally{
            setLoading(false)
        }
    }
    async function Register(email,senha){
        try{
            setLoading(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email,senha)
                await setSection(resp.user)
                route.push('/')
        }finally{
            setLoading(false)
        }
    }
    async function logout(){
        try{
            setLoading(true)
            await firebase.auth().signOut()
            await setSection(null)
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        if(Cookies.get('admin-template-auth')){
            const cancel = firebase.auth().onIdTokenChanged(setSection)
            return () => cancel()
        }else{
            setLoading(false)
        }
    }, [])   
    return(
        <AuthContext.Provider value ={{ 
            user,
            loading,
            loginGoogle,
            login,
            Register,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext