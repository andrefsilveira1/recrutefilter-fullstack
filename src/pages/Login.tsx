import { useState } from "react";
import Auth from "../Components/auth/Authinput";
import { AtentionIco } from "../Components/Icons/Index";
import useAuth from "../data/hook/UseAuth";


export default function Login(){

    const {login, Register, loginGoogle} = useAuth()
    const[mode, setMode] = useState<'login' | 'register'>('login')
    const [error,setError] = useState(null)
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    async function Submitregister(){
        try{
            if(mode === 'login'){
                await login(email,senha)
            }else{
                await Register(email,senha)
            }
        }catch(e){
            ShowError(e?.message ?? 'Erro inesperado')
        }
    }
    function ShowError(msg:any, time = 5){
        setError(msg)
        setTimeout(() => setError(null), time * 1000)
    }
    return(
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`
            hidden md:block md:w-1/2 lg:w-2/3
            `}>
                <img src="https://source.unsplash.com/random" alt="Imagem da tela de autenticação"
                    className={`h-screen w-full object-cover`}
                />
            </div>
            <div className={` m-10 md:block w-full md:w-1/2 lg:w-1/3`}>
                <h1 className={`text-lx font-bold mb-5 text-3xl`}>{mode === 'login' ? 'Entre com a sua conta!' : 'Cadastre-se na plataforma!'}</h1>
                {error ? (
                    <div className={`
                    flex items-center
                    bg-red-400 text-white py-3 px-5 my-2
                    border border-red-700 rounded-lg
                `}>
                        {AtentionIco(7)}
                    <span className={`ml-3`}>{error}</span>
                </div>
                ) : false}
                <Auth
                    label="E-mail"
                    value={email}
                    type="email"
                    newValue={setEmail}
                    required
                />
                <Auth
                    label="Senha"
                    value={senha}
                    type="password"
                    newValue={setSenha}
                    required
                />
                <button onClick={Submitregister} className={`
                    w-full bg-indigo-500 hover:bg-indigo-300
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {mode === 'login' ? 'Entrar' : 'Registrar'}
                </button>
                <hr className={`
                    my-6 border-gray-300 w-full
                `}/>
                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-300
                    text-white rounded-lg px-4 py-3
                `}>
                    Entrar com Google 
                </button>
                {mode === 'login' ? (
                    <p> Novo(a) por aqui?
                        <a onClick={() => setMode('register')} className={`text-blue-500 hover:text-blue-700
                        font-semibold cursor-pointer ml-1`}>Crie uma conta!</a>
                    </p>
                ):(
                    <p>
                        Já possui um cadastro?
                        <a onClick={() => setMode('login')} className={`text-blue-500 hover:text-blue-700
                        font-semibold cursor-pointer ml-1`}>Entrar</a>
                    </p>
                )}
            </div>
        </div>
    )
}