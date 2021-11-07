interface ContentProps{
    children?: any
}
export default function Content(props: ContentProps){
    return(
        <div className={`
            flex flex-col mt-7
            text-gray-800
            dark:text-gray-200
        `}>
            {props.children}
        </div>
    )
}