import Job from "./Job";
export default interface JobRepo{
    save(job: Job): Promise<Job>
    delete(job: Job): Promise<void>
    get(): Promise<Job[]>
}