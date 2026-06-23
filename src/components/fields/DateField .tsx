interface Inputs {
  name: string;
  label: string;
  register: any;
  validation?: any;
  error?: any;
  min?: number;
  max?: number;
  value?:string;
}

const DateField = ({
  name,
  label,
  register,
  validation,
  error,
  min,
  max,
  value
}: Inputs) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>

      <div className="mt-2">
        <input
          type="date"
          id={name}
          min={min}
          max={max}
          defaultValue={value}
          {...register(name, validation)}
          className="block w-full rounded-md bg-white py-1.5 px-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default DateField;