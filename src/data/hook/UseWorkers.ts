import { useState, useEffect } from "react"
import WorkerRepo from "../../core/WorkerRepo"
import Workercolection from "../../Firebase/db/WorkerArray"
import Worker from "../../core/Worker"
export default function UseWorkers(){
    const repo:WorkerRepo = new Workercolection()
    const[worker,setWorker] = useState<Worker>(Worker.void())
    const [workers, setWorkers] = useState<Worker[]>([])
    useEffect(gotAll ,[])

    async function saveWorker(worker: Worker){
        await repo.save(worker)
        gotAll()
    }
    function gotAll(){
        repo.get().then((workers) => {
            setWorkers(workers)
        })
    }
    function NewWorker(){
        setWorker(Worker.void())
    }
    return{
        worker,
        workers,
        saveWorker,
        gotAll,
        NewWorker
    }
}