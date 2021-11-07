import UseAppData from "../../data/hook/UseAppData";
import SideBar from "./SideBar";
import ThemeButton from "./ThemeButton";
import Title from "./Title";
import UserIcon from "./UserIcon";

interface HeaderProps{
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps){
    const {theme, ChangeTheme} = UseAppData()
    return(
        <div className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <ThemeButton theme={theme} ChangeTheme={ChangeTheme}/>
                <UserIcon className="ml-3 mr-5"/>
            </div>
        </div>
    )
}