import React from "react";
import MenuItem from "./MenuItem";
import { IconeAjuste, IconeCasa, IconeNotification } from "../icons";

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" texto="Início" icone={IconeCasa}/>
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjuste}/>
        <MenuItem url="/Notificacoes" texto="Notificações" icone={IconeNotification}/>
      </ul>
    </aside>
  );
}
