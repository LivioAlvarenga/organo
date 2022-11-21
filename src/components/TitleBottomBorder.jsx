const TitleBottomBorder = (props) => {
  return (
    <div className="relative p-6 my-10">
      <h2 className={`${props.textColor} text-center text-3xl font-prata`}>{props.name}</h2>
      <span
        className={`${props.borderBottomColor} absolute right-1/2 mt-4 h-1 w-16 translate-x-1/2`}
      ></span>
    </div>
  );
};

export default TitleBottomBorder;
