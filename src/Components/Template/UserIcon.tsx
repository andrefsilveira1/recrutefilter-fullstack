import Link from "next/link"
import useAuth from "../../data/hook/UseAuth"
import Image from 'next/image'
import img from "../../../public/images/vercel.svg"

interface UserIconProps{
    className?: string
}

export default function UserIcon(props:UserIconProps){
    const { user } = useAuth()
    const url = user?.imageURL
    return(
        <Link href="/Profile">
            <img
                src={url ?? 'images/ico.png'}
                alt="Avatar do usuário"
                className={`
                    h-10 w-10 rounded-full
                    cursor-pointer object-cover
                    dark:bg-white
                    ${props.className}
                `}/>
        </Link>
    )
}