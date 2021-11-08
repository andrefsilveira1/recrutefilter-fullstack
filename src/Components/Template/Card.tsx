import { userIco } from "../Icons/Index";

interface CardProps{
    id?: string,
    name?: string,
    area?: string,
    linkedin?: string,
    email?: string,
    about?: string,
    number?: string,
    key?:number
}
export default function Card(props: CardProps){
    return(
        <div className={` h-48 w-7/12 ml-96 bg-gray-200 flex flex-row justify-around mb-10 rounded-full shadow-lg text-blue-400 dark:text-blue-600 dark:bg-gray-700`}>
            <div className={`h-full w-1/12 flex items-center justify-center`}>
                {userIco(12)}
            </div>
            <div className={`flex flex-col mt-2 flex-grow dark:text-gray-100`}>
                <h2 className={`mx-2 text-black dark:text-gray-300 font-bold`}>{props.email}</h2>
                <h1 className={`mx-2 text-black dark:text-gray-300 font-bold`}>{props.name}</h1>
                <h2 className={`mx-2 text-black dark:text-gray-300 `}>{props.area}</h2>
                <hr className={`
                    my-3 border-gray-900 w-11/12
                `}/>
                <p className={``}>Conhecimentos: {props.about}</p>
                <a href={props.linkedin} target="_blank" className={`font-bold text-gray-600 dark:text-gray-200 cursor-pointer`}>Linkedin</a>
            </div>
            <div className={`mr-5`}>
                <a href={`mailto:${props.area}`}target="_blank">
                    <button className={` mt-16 rounded-xl bg-blue-700 dark:bg-blue-900 dark:hover:bg-blue-600 text-white px-4 py-3 hover:bg-blue-900`}>Tenho interesse</button>
                </a>
            </div>
        </div>
    )
}