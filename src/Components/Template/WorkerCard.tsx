import { useState } from "react";
import Worker from "../../core/Worker";
import Card from "./Card";

interface WorkercardProps{
    worker: Worker[]
}
export default function Workercard(props: WorkercardProps){
    const [search,setSearch] = useState('')
    function renderRow(busca){
        return props.worker?.map((worker) => {
            const close = Object.values(worker).filter((linkedin) => worker.name.toLowerCase().includes(busca.toLowerCase()))
            return(
                <>
                {close.map((linkedin) => (
                    <Card
                    id={worker.id}
                    name={worker.name}
                    area={worker.area}
                    linkedin={worker.linkedin}
                    about={worker.about}
                    email={worker.email}
                />
                ))}
                </>
            )
        })
    }
    function renderCard(){
        return props.worker?.map((worker,i) => {
            return(
                <>
                <Card
                    id={worker.id}
                    name={worker.name}
                    area={worker.area}
                    linkedin={worker.linkedin}
                    about={worker.about}
                    email={worker.email}
                />
                </>
            )
        })
    }
    return(
        <>
            <div className={`w-11/12 flex flex-col items-center justify-center my-10`}>
                <input type="text" className={`rounded-lg w-5/12 h-10`} value ={search}placeholder="Busque por uma tecnologia ou área"
                    onChange={(e) => setSearch(e.target.value)}
                ></input>
            </div>
            {search === '' ? (renderCard()) : (renderRow(search))}
        </>
    )
}