import Worker from "../../core/Worker";
import Card from "./Card";

interface WorkercardProps{
    worker: Worker[]
}
export default function Workercard(props: WorkercardProps){
    function renderCard(){
        return props.worker?.map((worker,i) => {
            return(
                <Card
                    id={worker.id}
                    name={worker.name}
                    area={worker.area}
                    linkedin={worker.linkedin}
                    about={worker.about}
                    email={worker.email}
                />
            )
        })
    }
    return(
        <>
            {renderCard()}
        </>
    )
}