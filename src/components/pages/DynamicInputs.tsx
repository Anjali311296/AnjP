import { useForm } from "react-hook-form";
import { COMPONENTS } from "../fields";
import { getValidationRules } from "../../utils/validationMapper";


const userDetails = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    pattern: "",
    minLength: 2,
    maxLength: 50,
    min: 0,
    max: 0,
    value: "abc",
  },
   {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: false,
    pattern: "",
    minLength: 2,
    maxLength: 50,
    min: 0,
    max: 0,
    value: "",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$",
    minLength: 0,
    maxLength: 0,
    min: 0,
    max: 0,
    value: "ab@gmail.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
    pattern: "^[0-9]{10}$",
    minLength: 0,
    maxLength: 0,
    min: 0,
    max: 0,
    value: "9999999999",
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    required: true,
    pattern: "",
    minLength: 0,
    maxLength: 0,
    min: 18,
    max: 100,
    value: "20",
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    required: true,
    pattern: "",
    minLength: 0,
    maxLength: 0,
    min: 0,
    max: 0,
    options: ["Male", "Female", "Other"],
    value: "Other",
  },
  {
    name: "dob",
    label: "Date",
    type: "date",
    required: true,
    pattern: "",
    minLength: 0,
    maxLength: 0,
    min: "2025-04-01",
    max: "2025-05-30",
    value: "2025-05-01",
  },
];

const DynamicInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data,"formadata123");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {userDetails.map((field) => {
        const Component = COMPONENTS[field.type];
        if (!Component) return null;

        return (
          <Component
            key={field.name}
            {...field}
            register={register}
            validation={getValidationRules(field)}
            error={errors[field.name]}
          />
        );
      })}

      <button type="submit" className="bg-green-200 p-2 mt-2 rounded-2xl">
        Submit
      </button>
    </form>
  );
};

export default DynamicInputs;
