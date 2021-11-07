interface InputProps{
    text?: string
    value?: any
    onChange:(v: any) => void
}
export default function Input(props: InputProps){
    return(
        <div className={`flex flex-col`}>
            <label className={`mb-4`}>
                {props.text}
            </label>
            <input
                onChange={e => props.onChange?.(e.target.value)}
                className={`border border-gray-700 rounded-lg bg-gray-300 px-4 py-2`} type="text"
                value={props.value}
            ></input>
        </div>
    )
}