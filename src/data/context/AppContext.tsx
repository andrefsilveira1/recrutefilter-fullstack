import { Children, createContext, useEffect, useState } from "react";

type Theme = 'dark' | ''
type side = 'fakse' | ''
interface AppContextProps{
    theme?: string
    ChangeTheme?:() => void
    side?: string
    ChangeSide?:() => void
    UserType?: string
    ChangeType?:() => void
}
const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any){
    const[UserType, SetUserType] = useState('')
    const[theme,setTheme] = useState('')
    const[side,setSide] = useState('')
    function ChangeType(){
        const NewType = UserType === '' ? 'user' : ''
        SetUserType(NewType)
        localStorage.setItem('UserType',NewType)
    }
    useEffect(() =>{
        const saveType = localStorage.getItem('UserType')
        SetUserType(saveType)
    },[])
    function ChangeSide(){
        const NewSide = side === '' ? 'hide' : ''
        setSide(NewSide)
        localStorage.setItem('side',NewSide)
    }
    useEffect(() =>{
        const saveSide = localStorage.getItem('side')
        setSide(saveSide)
    },[])
    function ChangeTheme(){
        const NewTheme = theme === '' ? 'dark' : ''
        setTheme(NewTheme)
        localStorage.setItem('theme', NewTheme)
    }
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        setTheme(savedTheme)
    }, [])
    return(
        <div>
            <AppContext.Provider value={{UserType, ChangeType,side,ChangeSide,theme, ChangeTheme}}>
                {props.children}
            </AppContext.Provider>
        </div>
    )
}

export default AppContext
export const AppConsumer = AppContext.Consumer