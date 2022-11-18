const Button = (props) => {
  return (
    <button className="my-10 cursor-pointer rounded-xl border-none bg-principal-100 p-8 text-lg font-bold text-white duration-500 ease-in-out hover:text-principal-200 ">
      {props.children}
    </button>
  );
};

export default Button;
