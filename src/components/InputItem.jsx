const InputField = ({placeholder, value, onChange}) => {
  return (
    <input
      type="text"
      className="form-control flex-1 p-2 border border-gray-300 rounded"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
