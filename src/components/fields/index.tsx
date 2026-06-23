import DateField from "./DateField ";
import InputField from "./InputField";
import SelectField from "./SelectFields";

export const COMPONENTS:any = {
  text: InputField,
  email: InputField,
  tel: InputField,
  number: InputField,
  select: SelectField,
  date:DateField
};