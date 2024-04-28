interface ConteudoProps {
  children?: any;
}

export default function Cabecalho(props: ConteudoProps) {
  return (
    <div
      className={`
    flex flex-col mt-z
    dark:text-gray-200
    `}
    >
      {props.children}
    </div>
  );
}
