import WorkerRepo from "../../core/WorkerRepo"
import Worker from "../../core/Worker"
import firebase from "../config"
export default class WorkerArray implements WorkerRepo{
    #compiler = {
        toFirestore(worker: Worker){
            return {
                name: worker.name,
                id: worker.id,
                area: worker.area,
                email: worker.email,
                linkedin: worker.linkedin,
                about: worker.about

            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Worker{
            const data = snapshot?.data(options)
            return new Worker(data.name,data.area,data.email,data.linkedin,data.about, snapshot?.id)
        }
    }
    async save(worker: Worker): Promise<Worker>{
        if(worker?.id){
            await this.Workercolection().doc(worker.id).set(worker)
            return worker
        }else{
            const docRef = await this.Workercolection().add(worker)
            const doc = await docRef.get()
            return doc.data()
        }
    }
    async delete(worker: Worker):Promise<void>{
        return this.Workercolection().doc(worker.id).delete()
    }
    async get(): Promise<Worker[]>{
        const query = await this.Workercolection().get()
        return query.docs.map(doc => doc.data())
    }
    private Workercolection(){
        return firebase.firestore().collection('workers').withConverter(this.#compiler)
    }

}