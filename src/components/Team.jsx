import CardImageTitle from "./CardImageTitle";

const Team = (props) => {
  return (
    props.collaborators.length > 0 && (
      <section className={`${props.colorFundo} p-8 text-center`}>
        <div className="mx-auto w-[96%] max-w-7xl overflow-hidden">
          <div className="relative">
            <h3 className="text-center font-prata text-3xl">{props.name}</h3>
            <span
              className={`${props.colorDestaque} absolute mx-auto  mt-2 h-1 w-8 -translate-x-1/2`}
            ></span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {props.collaborators.map((collaborator) => (
              <CardImageTitle
                key={collaborator.nome}
                nome={collaborator.nome}
                cargo={collaborator.cargo}
                imagem={collaborator.imagem}
                colorDestaque={props.colorDestaque}
              />
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default Team;
