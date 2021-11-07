import Worker from "./Worker";
export default interface WorkerRepo{
    save(worker: Worker): Promise<Worker>
    delete(worker: Worker): Promise<void>
    get(): Promise<Worker[]>
}