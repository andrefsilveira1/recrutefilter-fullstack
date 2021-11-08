import Layout from "../Components/Template/Layout";
import { AppConsumer } from "../data/context/AppContext";
import UseAppData from "../data/hook/UseAppData";

interface NotificationsProps{

}
export default function Notifications(props: NotificationsProps){
    const data = UseAppData()
    return(
        <Layout title="Notificações" subtitle="Aqui você irá manejar seus avisos!" screen="h-screen">
            <h3 className={`ml-5`}>Aqui você poderá ver suas notificações!</h3>
            <AppConsumer>
                {data => <h3>{data.theme}</h3>}
                
            </AppConsumer>
            <div className={`flex justify-center items-center`}>
            <div className={`flex flex-col items-center justify-center bg-blue-100 dark:bg-gray-600 rounded-lg py-5 w-8/12 shadow-lg h-96 `}>
                <h1 className={`text-xl`}>Fique por dentro dos eventos na sua cidade!</h1>
                <h3 className={`mt-3 text-xl`}>Aqui você ficará por dentro de eventos, workshops e mais!</h3>
            </div>
          </div>
        </Layout>
    )
}