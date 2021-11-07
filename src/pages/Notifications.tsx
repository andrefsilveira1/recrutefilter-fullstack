import Layout from "../Components/Template/Layout";
import ThemeButton from "../Components/Template/ThemeButton";
import { AppConsumer } from "../data/context/AppContext";
import UseAppData from "../data/hook/UseAppData";

interface NotificationsProps{

}
export default function Notifications(props: NotificationsProps){
    const data = UseAppData()
    return(
        <Layout title="Notificações" subtitle="Aqui você irá manejar seus avisos!" screen="h-screen">
            <h3>Conteúdo da página</h3>
            <AppConsumer>
                {data => <h3>{data.theme}</h3>}
            </AppConsumer>
            <button onClick={data.ChangeTheme}>Mudar</button>
        </Layout>
    )
}