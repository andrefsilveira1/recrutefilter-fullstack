import type { NextPage } from 'next'
import Layout from '../Components/Template/Layout'
const Home: NextPage = () => {
  return (
    <div className={`bg-gray-700`}>
        <Layout title="Página Inicial" subtitle="Aqui é por onde começamos!" screen="h-screen">
          <div className={`flex justify-center items-center`}>
            <div className={`flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-lg py-5 w-8/12 shadow-lg h-96 `}>
                <h1 className={`text-xl`}>Recru Filter, sua plataforma para procurar empregos e desenvolvedores!</h1>
                <h3 className={`mt-3 text-xl`}>Nós somos uma plataforma feita por Devs para Devs! encontre rápido sua possível vaga de emprego ou um Dev para a sua empresa</h3>
            </div>
          </div>
        </Layout>

    </div>
  )
}

export default Home
