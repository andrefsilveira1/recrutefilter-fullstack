interface Authprops{
    label: string
    value: any
    type?: 'text' | 'email' | 'password'
    name?: string
    required?: boolean
    dontRender?:boolean
    newValue?: (newValue:any) => void
    onChange?:(e) => void
}
export default function Auth(props: Authprops){
    return props.dontRender ? null :(
        <div className={`
            flex flex-col
            `}>
            <label>{props.label}</label>
            
            <input 
                type={props.type ?? 'text'}
                value={props.value}
                onChange={e => props.newValue?.(e.target.value)}
                required={props.required}
                name={props.name}
                className={`
                    px-4 py-3 rounded-lg
                    bg-gray-200
                    mt-4
                    border focus:border-blue-500 focus:bg-white
                    dark:bg-gray-500
                    focus:outline-none
                `}>
                
                </input>
        </div>
    )
}