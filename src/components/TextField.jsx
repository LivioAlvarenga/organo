const TextField = (props) => {
  
  const whenType = (event) => {
    props.toChange(event.target.value)
  };

  return (
    <div className="my-6 mx-0">
      <label className="mb-2 block text-lg font-semibold">{props.label}</label>
      <input
        className="w-full rounded-lg border-none bg-white p-6 text-lg shadow-3xl"
        placeholder={props.placeholder}
        required={props.required}
        onChange={whenType}
        value={props.value}
      />
    </div>
  );
};

export default TextField;
