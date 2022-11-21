const Team = (props) => {
  return (
    <section className={`${props.colorFundo} p-8 text-center`}>
      <div className="relative">
        <h3 className="text-center text-3xl">{props.name}</h3>
        <span
          className={`${props.colorDestaque} absolute mx-auto  mt-2 h-1 w-8 -translate-x-1/2`}
        ></span>
      </div>
    </section>
  );
};

export default Team;
