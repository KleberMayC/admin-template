import Layout from "@/components/template/Layout";
import "../styles/globals.css";
import { AppContextProvider } from "@/data/context/AppContext";
import ThemeSwitcher from "@/components/template/theme-switcher";
import ThemeProvider from "./providers/theme-provider";


export default function Home() {
  return (
    <AppContextProvider>
          <ThemeProvider
            attribute="class"     
            defaultTheme="system"
            enableSystem>
              <Layout
                titulo="Página Inicial"
                subtitulo="Estamos fazendo algum coisa, aqui é só pra ter um texto"
                  >
                <h3>Conteudo asdsad</h3>
                <ThemeSwitcher />
            </Layout>

        </ThemeProvider>

        
    </AppContextProvider>
  );
}