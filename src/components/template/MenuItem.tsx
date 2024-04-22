import Link from "next/link"

interface MenuItemProps{
    url: string
    texto: string
    icone: any
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <li className={`hover:bg-gray-100`}>
        <Link className={`flex flex-col justify-center items-center h-20 w-full`} href={props.url}>
                {props.icone}
                <span>{props.texto}</span>
           
        </ Link>
    </li>
  )
}
