const TextField = (props) => {
  return (
    <div className="my-6 mx-0">
      <label className="mb-2 block text-lg font-semibold">{props.label}</label>
      <input
        className="w-full border-none bg-white p-6 text-lg shadow-3xl"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
