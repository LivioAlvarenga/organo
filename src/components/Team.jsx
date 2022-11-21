import CardImageTitle from "./CardImageTitle";

const Team = (props) => {
  return (
    props.collaborators.length > 0 && (
      <section className={`${props.colorFundo} p-8 text-center`}>
        <div className="relative">
          <h3 className="text-center text-3xl">{props.name}</h3>
          <span
            className={`${props.colorDestaque} absolute mx-auto  mt-2 h-1 w-8 -translate-x-1/2`}
          ></span>
        </div>
        <div className="mt-10 flex flex-wrap justify-around gap-5">
          {props.collaborators.map((collaborator) => (
            <CardImageTitle
              nome={collaborator.nome}
              cargo={collaborator.cargo}
              imagem={collaborator.imagem}
              colorDestaque={props.colorDestaque}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
