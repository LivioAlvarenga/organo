const CardImageTitle = (props) => {
  return (
    <div className="w-72">
      <div className={`${props.colorDestaque} rounded-t-lg`}>
        <img
          className="relative -bottom-12 m-auto w-[120px] rounded-full"
          src={props.imagem}
          alt={props.nome}
        />
      </div>
      <div className="rounded-b-lg bg-white pt-[70px] pb-10 shadow-[5px_5px_15px_rgba(0,0,0,0.08)]">
        <h4 className="mb-2 text-lg font-bold text-principal-100">{props.nome}</h4>
        <h5 className="px-4 text-lg text-txColor-100">{props.cargo}</h5>
      </div>
    </div>
  );
};

export default CardImageTitle;
