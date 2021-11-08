import { userIco } from "../Icons/Index";

interface JobTemplateProps{
    id?: string,
    name?: string,
    area?: string,
    linkedin?: string,
    email?: string,
    about?: string,
    wage?: string,
}
export default function JobTemplate(props: JobTemplateProps){
    return(
        <div className={` h-48 w-7/12 ml-96 bg-gray-200 flex flex-row justify-around mb-10 rounded-full shadow-lg text-blue-400`}>
            <div className={`h-full w-1/12 flex items-center justify-center`}>
                {userIco(12)}
            </div>
            <div className={`flex flex-col mt-2 flex-grow`}>
                <h1 className={`mx-2 text-black`}>Empresa: {props.name}</h1>
                <hr className={`
                    my-3 border-gray-900 w-11/12
                `}/>
                <p className={``}>Salário: {props.linkedin}</p>
                <a href={props.about} target="_blank" className={`font-bold text-gray-300 cursor-pointer`}>Sobre a empresa</a>
                <h1 className={` text-black`}>Pré-requisitos: {props.area}</h1>
            </div>
            <div className={`mr-5`}>
                <a href={`mailto:${props.wage}`}target="_blank">
                    <button className={` mt-16 rounded-lg bg-gray-700 text-white px-4 py-3 hover:bg-gray-300`}>Tenho interesse</button>
                </a>
            </div>
        </div>
    )
}