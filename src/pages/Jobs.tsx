import Layout from "../Components/Template/Layout";
import UseJobs from "../data/hook/UseJobs";
import Jobcard from "../Components/Template/JobCard";
import Formjob from "./FormJobs";

export default function Jobs(){
    const {job, jobs, saveJob} = UseJobs()
    return(
        <div>
            <Layout title="Tela de teste dos trabalhos" subtitle="Estamos testando essa tela!" screen="h-screen">
                <Formjob job={job} changeJob={saveJob}/>
            </Layout>
        </div>
    )
}