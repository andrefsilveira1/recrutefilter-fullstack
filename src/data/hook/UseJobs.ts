import { useState, useEffect } from "react"
import JobRepo from "../../core/JobRepo"
import Jobcolection from "../../Firebase/db/JobArray"
import Job from "../../core/Job"
export default function UseJobs(){
    const repo:JobRepo = new Jobcolection()
    const[job,setJob] = useState<Job>(Job.void())
    const [jobs, setJobs] = useState<Job[]>([])
    useEffect(gotAll ,[])

    async function saveJob(job: Job){
        await repo.save(job)
        gotAll()
    }
    async function RemoveJob(job: Job){
        await repo.delete(job)
        gotAll()
    }
    function gotAll(){
        repo.get().then((jobs) => {
            setJobs(jobs)
        })
    }
    function Newjob(){
        setJob(Job.void())
    }
    return{
        job,
        jobs,
        saveJob,
        gotAll,
        Newjob,
        RemoveJob
    }
}