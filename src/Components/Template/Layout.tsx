import UseAppData from "../../data/hook/UseAppData";
import ForceAuth from "../auth/ForceAuth";
import Content from "./Content";
import Header from "./Header";
import SideBar from "./SideBar";

interface LayoutProps{
    title: string
    subtitle: string
    children?: any
    screen?: string
}
export default function Layout(props: LayoutProps){
    const{theme} = UseAppData()
    return(
        <ForceAuth>
            <div className={`${theme} flex ${props.screen} w-screen`}>
                <SideBar/>
                <div className={`
                    flex 
                    flex-col 
                    w-full
                    bg-gray-300 dark:bg-gray-800
                `}>
                    <Header title={props.title} subtitle={props.subtitle}/>
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </ForceAuth>
    )
}