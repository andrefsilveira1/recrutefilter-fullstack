import JobRepo from "../../core/JobRepo"
import Job from "../../core/Job"
import firebase from "../config"
export default class JobArray implements JobRepo{
    #compiler = {
        toFirestore(job: Job){
            return {
                name: job.name,
                wage: job.wage,
                contact: job.contact,
                company: job.company,
                site: job.site,
                about: job.about
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Job{
            const data = snapshot?.data(options)
            return new Job(data.name,data.contact,data.wage,data.company,data.site,data.about)
        }
    }
    async save(job: Job): Promise<Job>{
        if(job?.name){
            await this.Jobcolection().doc(job.name).set(job)
            return job
        }else{
            const docRef = await this.Jobcolection().add(job)
            const doc = await docRef.get()
            return doc.data()
        }
    }
    async delete(job: Job):Promise<void>{
        return this.Jobcolection().doc(job.name).delete()
    }
    async get(): Promise<Job[]>{
        const query = await this.Jobcolection().get()
        return query.docs.map(doc => doc.data())
    }
    private Jobcolection(){
        return firebase.firestore().collection('jobs').withConverter(this.#compiler)
    }

}