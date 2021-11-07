import type { NextPage } from 'next'
import Layout from '../Components/Template/Layout'
const Home: NextPage = () => {
  return (
    <div className={`bg-gray-700`}>
        <Layout title="Página Inicial" subtitle="Aqui é por onde começamos!" screen="h-screen"/>
    </div>
  )
}

export default Home
