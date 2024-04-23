

import Link from "next/link";


interface MenuItemProps {
  url?: string;
  texto: string;
  icone: any;
  onClick?: (evento: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarLink() {
    return (
      
        <div className={`flex flex-col justify-center items-center h-20 w-20 menu-link`}>
          {props.icone}
          <span className={`text-xs font-light text-gray-600`}>
            {props.texto}
          </span>
        </div>
      
    );
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>
      {props.url ? (
        <Link href={props.url}>
            { renderizarLink()}
        </Link>
       
      ) : (
        
          renderizarLink()
        
      )}
    </li>
  );
}