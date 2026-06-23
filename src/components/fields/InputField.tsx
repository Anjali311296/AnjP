 interface inputs{
 name: string;
 label: string;
 type: string;
 register: any;
 validation: any;
 error: any;
 value:string;
 }
 const InputField=({
  name,
  label,
  type,
  register,
  validation,
  error,
  value
}:inputs) =>{
  return (
    <div>
      <label htmlFor={`${name}`} className="block text-sm/6 font-medium text-gray-900">{label}</label>

      <input
        id={`${name}`}
        type={type}
        {...register(name, validation)}
        defaultValue={value}
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />

      {error && (
        <p style={{ color: "red" }}>
          {error.message}
        </p>
      )}
    </div>
  );
}
export default InputField