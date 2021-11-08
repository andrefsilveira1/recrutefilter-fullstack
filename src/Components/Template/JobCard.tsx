import { useState } from "react";
import Job from "../../core/Job";
import UseJobs from "../../data/hook/UseJobs";
import Card from "./Card";
import JobTemplate from "./JobTemplate";

interface JobcardProps{
    job?: Job[]
    deleteJob?:(job:Job) => void
}
export default function Jobcard(props: JobcardProps){
    const {RemoveJob} = UseJobs()
    const [search,setSearch] = useState('')
    function renderCard(){
        return props.job?.map((job,i) => {
            return(
                <>
                    <JobTemplate
                    name={job.name}
                    wage={job.wage}
                    linkedin={job.company}
                    about={job.site}
                    email={job.contact}
                    area={job.about}
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
            {renderCard()}
        </>
    )
}