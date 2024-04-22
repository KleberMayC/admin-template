interface ConteudoProps {
  children?: any;
}

export default function Cabecalho(props: ConteudoProps) {
  return (
    <div
      className={`
    flex flex-col mt-z
    `}
    >
      {props.children}
    </div>
  );
}
