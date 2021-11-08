import Image from 'next/image'
import router from 'next/router'
import Head from 'next/head'
import loadingIMG from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/UseAuth'
export default function ForceAuth(props){
    function Render(){
        return(
            <>
                <Head>
                    <script 
                        dangerouslySetInnerHTML={{
                            __html:`
                                if(!document.cookie?.includes("admin-template-auth")){
                                    window.location.href= "/Login"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }
    const {user,loading} = useAuth()
    function RenderLoading(){
        return(
            <div className={`flex justify-center items-center h-screen`}>
                <Image src={loadingIMG}/>
            </div>
        )
    }
    if(!loading && user?.email){
        return Render()
    }else if (loading){
        return RenderLoading()
    }else{
        router.push('/Profile')
        return null
    }
}