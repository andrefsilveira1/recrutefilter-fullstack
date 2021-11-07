import Layout from "../Components/Template/Layout";
import UseAppData from "../data/hook/UseAppData";
import UseWorkers from "../data/hook/UseWorkers";
import Form from "./Form";

export default function Register(){
    const{UserType} = UseAppData()
    const {worker,workers, saveWorker} = UseWorkers()
    return(
        <div>
            <Layout title="Defina o tipo do seu perfil" subtitle="Escolha entre empresa ou dev!" screen="h-screen">
                <Form worker={worker} change={saveWorker}/>
            </Layout>
        </div>
    )
}