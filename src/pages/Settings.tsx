import Layout from "../Components/Template/Layout";
import UseAppData from "../data/hook/UseAppData";
interface SettingsProps{
    
}
export default function Settings(props: SettingsProps){
    const {UserType,ChangeType} = UseAppData()
    return(
        <Layout title="Configurações" subtitle="Aqui você irá alterar suas preferências!" screen="h-screen">
            <h3>Conteúdo da Página Settings</h3>
            <div>
                <h1>Se você cometeu um equívoco e se cadastrou errado, clique no botão abaixo para mudar o tipo de perfil!</h1>
                <button className={`rounded-lg bg-gray-700 text-white hover:bg-gray-500`} onClick={ChangeType}>Mudar perfil</button>
            </div>
        </Layout>
    )
}