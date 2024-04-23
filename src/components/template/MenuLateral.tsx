

import MenuItem from "./MenuItem";
import {
  IconeAjuste,
  IconeCasa,
  IconeLogout,
  IconeNotification,
} from "../icons";
import Logo from "./Logo";

export default function MenuLateral() {
  return (
    <aside className={` flex flex-col`}>
      <div
        className={`
      flex flex-col items-center justify-center
      bg-gradient-to-r from-indigo-500 via to-purple-800
      w-20
      h-20`}
      >
        <Logo />
      </div>

      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjuste} />
        <MenuItem
          url="/notificacoes"
          texto="Notificações"
          icone={IconeNotification}
        />
      </ul>
      <ul>
        <MenuItem  texto="Sair" icone={IconeLogout} 
           onClick={()=> console.log('logged out')}
        />
      </ul>
    </aside>
  );
}
