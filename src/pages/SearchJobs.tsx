import Jobcard from "../Components/Template/JobCard";
import Layout from "../Components/Template/Layout";
import UseAppData from "../data/hook/UseAppData";
import UseJobs from "../data/hook/UseJobs";
import Formjob from "./FormJobs";

export default function SearchJobs(){
    const{UserType} = UseAppData()
    const {job,jobs, saveJob, RemoveJob} = UseJobs()
    return(
        <div>
            <Layout title="Defina o tipo do seu perfil" subtitle="Escolha entre empresa ou dev!" screen="h-full">
                <Jobcard job={jobs}/>
            </Layout>
        </div>
    )
}