import Layout from "../Components/Template/Layout";
import Worker from "../core/Worker"
import Workercard from "../Components/Template/WorkerCard";
import UseWorkers from "../data/hook/UseWorkers";
import { useState } from "react";

export default function Workers2(){
    const clients = [
        new Worker('aa','abb','ccc','dd','aaaaa','kkk')
    ]
    const {worker,workers, saveWorker} = UseWorkers()
    return(
        <div>
            <Layout title="Tela de teste" subtitle="Estamos testando essa tela!" screen="h-full">
                <Workercard worker={workers} />
            </Layout>
        </div>
    )
}