import ThemeSwitcher from "@/components/template/theme-switcher";
import Layout from "../components/template/Layout";
import "tailwindcss/tailwind.css";
import ThemeProvider from "@/app/providers/theme-provider";
export default function Ajustes() {
  return (
    <ThemeProvider
        attribute="class"     
        defaultTheme="system"
        enableSystem>
      <Layout
          titulo="Ajustes e Configurações"
          subtitulo="Personalize o sistema por aqui!">
      <h3>Conteudo</h3>
      <ThemeSwitcher />
    </Layout>

</ThemeProvider>

  );
}
