import Link from "next/link"
interface MenuItensProps{
    url?: string
    text?: string
    ico: any
    onClick?: (e: any) => void
    ClassName?: string
}
export default function MenuButton(props: MenuItensProps){
    function RenderLink(){
        return(
            <a className={`flex flex-col justify-center items-center h-20 w-full ${props.ClassName} cursor-pointer dark:text-gray-200`}>
            {props.ico}
            <span className={`text-xs font-light text-gray-600`}>
                {props.text}
            </span>
        </a>
        )
    }
    return(
        <li onClick={props.onClick} className={`cursor-pointer`}>
            {props.url ? (
                <Link href={props.url}>
                    {RenderLink()}
                </Link>
            ) : (
                RenderLink()
            )}
        </li>
    )
}