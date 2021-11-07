import Layout from "../Components/Template/Layout";
import UseAppData from "../data/hook/UseAppData";
import UseJobs from "../data/hook/UseJobs";
import Formjob from "./FormJobs";

export default function RegisterJob(){
    const{UserType} = UseAppData()
    const {job,jobs, saveJob} = UseJobs()
    return(
        <div>
            <Layout title="Defina o tipo do seu perfil" subtitle="Escolha entre empresa ou dev!" screen="h-screen">
                <Formjob job={job} changeJob={saveJob}/>
            </Layout>
        </div>
    )
}