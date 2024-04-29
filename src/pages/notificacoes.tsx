import ThemeProvider from "@/app/providers/theme-provider";
import Layout from "@/components/template/Layout";
import ThemeSwitcher from "@/components/template/theme-switcher";
import AppContext from "@/data/context/AppContext";

import { useContext } from "react";
import "tailwindcss/tailwind.css";

export default function Notificacoes() {
  const {name} = useContext(AppContext)
 

  return (
      <ThemeProvider
          attribute="class"     
          defaultTheme="system"
          enableSystem>
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você irá gerenciar as notificações">
      <h3>Olá {name}</h3>
      <ThemeSwitcher />
      
    </Layout>
    </ThemeProvider>

  );
}
