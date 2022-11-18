const DropdownList = (props) => {
  const whenChanged = (event) => {
    props.toChange(event.target.value);
  };

  return (
    <div className="group relative my-6 mx-0">
      <label className="mb-2 block text-lg font-semibold">{props.label}</label>
      <select
        id="select"
        className="peer/select w-full cursor-pointer appearance-none rounded-lg border-none bg-white p-6 text-lg shadow-3xl"
        required={props.required}
        onChange={whenChanged}
        value={props.value}
      >
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
      <svg
        className="pointer-events-none absolute top-1/2 right-5 h-10 w-10 bg-center bg-no-repeat fill-principal-100 transition-all duration-300 ease-in-out peer-hover/select:animate-bounce"
        height="40"
        viewBox="0 0 24 24"
      >
        <path d="M7,10L12,15L17,10H7Z" />
      </svg>
    </div>
  );
};

export default DropdownList;
