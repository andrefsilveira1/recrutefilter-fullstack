import { useEffect } from "react";
import UseAppData from "../../data/hook/UseAppData";
import useAuth from "../../data/hook/UseAuth";
import { AddUserIco, BellIco, HomeIco, menuIco, mira, MoonIco, outIco, SearchIco, SettingsIco, SunIco, workerIco } from "../Icons/Index";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";

interface SideBarProps{

}
export default function SideBar(props: SideBarProps){
    const { logout } = useAuth()
    const{theme} = UseAppData()
    const {ChangeTheme} = UseAppData()
    const{side} = UseAppData()
    const{ChangeSide} = UseAppData()
    const{UserType} = UseAppData()
    const{ChangeType} = UseAppData()
    return(
        <>
            {side === 'hide' ? (
            <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900 dark:text-gray-200
        `}>
            <div className={`
            flex flex-col items-center justify-center
            h-20 w-20 bg-gradient-to-r `}>
            </div>
            <ul className={`flex-grow`}>
                <MenuItem text="Menu" ico={menuIco} onClick={ChangeSide}/>
                <MenuItem url="/" text="Home" ico={HomeIco}/>
                <MenuItem url="/Settings" text="Settings" ico={SettingsIco}/>
                <MenuItem url="/Notifications" text="Notifications" ico={BellIco}/>
                {UserType === '' ? (
                    <>
                        <MenuItem url="/Jobs" text="Registrar vaga" ico={workerIco}/> 
                        <MenuItem url="/Workers2" text="Buscar Dev" ico={SearchIco}/>
                    </>
                ):(
                    <>
                        <MenuItem url="/Register" text="Registrar Perfil" ico={AddUserIco(6)}/>
                        <MenuItem url="/SearchJobs" text="Buscar vaga" ico={SearchIco}/>
                    </>

                )}
                {theme === 'dark' ? (<MenuItem text="Claro" onClick={ChangeTheme} ico={SunIco}/>):(
                    <MenuItem text="Escuro" onClick={ChangeTheme} ico={MoonIco}/>
                )}
            </ul>
            <ul>
            <MenuItem text="Quit" ico={outIco} onClick={logout} ClassName={`
                text-red-600
                hover:bg-red-600 hover:text-white
                dark:hover:text-white
            `}/>
            </ul>
        </aside>): (
            <aside className={`
            flex flex-col h-full
            bg-gray-300
             text-gray-700
            dark:bg-gray-900 dark:text-gray-200 p-5
             w-5`}>
                <ul>
                    <MenuButton ico={menuIco} onClick={ChangeSide}/>
                </ul>
            </aside>
            )}
        </>
    )
}