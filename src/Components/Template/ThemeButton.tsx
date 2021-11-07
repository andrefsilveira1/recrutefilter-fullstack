import { MoonIco, SunIco } from "../Icons/Index";

interface ThemeButtonProps{
    theme: any
    ChangeTheme?:() => void
}
export default function ThemeButton(props: ThemeButtonProps){
    return props.theme === 'dark' ? (
        <div onClick={props.ChangeTheme} className={`
            hidden sm:flex items-center cursor-pointer
            bg-white 
            w-14 lg:w-24 h-8 p-1 rounded-full mr-2
        `}>
            <div className={`
                flex justify-center items-center
                bg-white text-gray-600 w-6 h-6 rounded-full
            `}>
                {SunIco}
            </div>
            <div className={`
                hidden lg:flex items-center ml-4 text-gray-500
            `}>
                <span>Claro</span>
            </div>
        </div>
    ): (
        <div onClick={props.ChangeTheme} className={`
            hidden sm:flex items-center justify-end cursor-pointer
            bg-black
            w-14 lg:w-24 h-8 p-1 rounded-full mr-2
        `}>
            <div className={`
                hidden lg:flex items-center mr-4 text-white
            `}>
                <span>Escuro</span>
            </div>
            <div className={`
                flex justify-center items-center
                bg-white text-gray-900 w-6 h-6 rounded-full
            `}>
                {MoonIco}
            </div>
        </div>
    )
}