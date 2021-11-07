import { useState } from "react";
import Job from "../core/Job";
import UseJobs from "../data/hook/UseJobs";
import Input from "./input";

interface FormProps{
    job?:Job
    changeJob:(job: Job) => void
    deleteJob?:(job: Job) => void
}
export default function Formjob(props: FormProps){
    const[name,setName] = useState(props.job?.name ?? '')
    const[wage,setWage] = useState(props.job?.wage ?? '')
    const[company,setCompany] = useState(props.job?.company ?? '')
    const[contact,setContact] = useState(props.job?.contact ?? '')
    const[site,setSite] = useState(props.job?.site ?? '')
    const[about,setAbout] = useState(props.job?.about ?? '')
    const {RemoveJob} = UseJobs()
    return(
        <>
        <div className={`flex flex-col items-center justify-center`}>
        <h1 className={`font-bold `}>Cadastro de vaga de emprego</h1>
                <div className={`w-9/12 `}>
                <Input onChange={setName} text="Nome da Empresa" value={name}/>
                <Input onChange={setWage} text="Salário" value={wage}/>
                <Input onChange={setAbout} text="Requisitos da vaga" value={about}/>
                <Input onChange={setContact} text="Contato da empresa" value={contact}/>
                <Input onChange={setSite} text="site da sua empresa ou rede social" value={site}/>
                <div className={`flex justify-center mt-5 mr-10 text-white`}>
                    <button className={`rounded-lg mt-2 bg-red-900 py-6 px-10 hover:bg-red-400 w-1/4`}>Cancelar</button>
                    <button className={`rounded-lg mt-2 bg-blue-900 py-6 px-10 ml-4 hover:bg-blue-400 w-1/4`}
                    onClick={() => props.changeJob?.(new Job(name,wage,company,contact,site,about))} >Salvar</button>
    
                </div>
            </div>
        </div>
        </>
    )
}