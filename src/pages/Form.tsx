import { useState } from "react";
import Worker from "../core/Worker";
import Input from "./Input";

interface FormProps{
    worker?:Worker
    change?:(worker: Worker) => void
}
export default function Form(props: FormProps){
    const[id,setid] = useState(props.worker?.id ?? '')
    const[name,setName] = useState(props.worker?.name ?? '')
    const[email,setEmail] = useState(props.worker?.email ?? '')
    const[area,setArea] = useState(props.worker?.area ?? '')
    const[linkedin,setLinkedin] = useState(props.worker?.linkedin ?? '')
    const[about,setAbout] = useState(props.worker?.about ?? '')
    return(
        <>
        <div className={`flex flex-col items-center justify-center`}>
        <h1 className={`font-bold `}>Cadastro do perfil para Emprego</h1>
                <div className={`w-9/12 `}>
                <Input onChange={setName} text="Nome" value={name}/>
                <Input onChange={setEmail} text="E-mail" value={email}/>
                <Input onChange={setArea} text="Área" value={area}/>
                <Input onChange={setLinkedin} text="Linkedin" value={linkedin}/>
                <Input onChange={setAbout} text="Base de conhecimento" value={about}/>
                <div className={`flex justify-center mt-5 mr-10 text-white`}>
                    <button className={`rounded-lg mt-2 bg-red-900 py-6 px-10 hover:bg-red-400 w-1/4`}>Cancelar</button>
                    <button className={`rounded-lg mt-2 bg-blue-900 py-6 px-10 ml-4 hover:bg-blue-400 w-1/4`}
                    onClick={() => props.change?.(new Worker(name,email,area,linkedin,about,id))} >Salvar</button>
                </div>
            </div>
        </div>
        </>
    )
}