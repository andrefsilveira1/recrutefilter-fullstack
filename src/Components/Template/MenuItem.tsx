import Link from "next/link"
interface MenuItensProps{
    url?: string
    text: string
    ico: any
    onClick?: (e: any) => void
    ClassName?: string
}
export default function MenuItem(props: MenuItensProps){
    function RenderLink(){
        return(
            <a className={`flex flex-col justify-center items-center h-20 w-full ${props.ClassName} dark:text-gray-200`}>
            {props.ico}
            <span className={`text-xs font-light text-gray-600 dark:text-gray-100`}>
                {props.text}
            </span>
        </a>
        )
    }
    return(
        <li onClick={props.onClick} className={`hover:bg-gray-300 cursor-pointer dark:hover:bg-gray-700`}>
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