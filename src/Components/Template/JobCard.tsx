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
            {renderCard()}
        </>
    )
}