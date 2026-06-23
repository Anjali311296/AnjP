type FieldConfig = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  min?: any;
  max?: any;
  options?: string[];
};

export const getValidationRules=(field: FieldConfig)=> {
  const rules: Record<string, any> = {};

  if (field.required) {
    rules.required = `${field.label} is required`;
  }

  if (field.minLength) {
    rules.minLength = {
      value: field.minLength,
      message: `Minimum ${field.minLength} characters`
    };
  }

  if (field.maxLength) {
    rules.maxLength = {
      value: field.maxLength,
      message: `Maximum ${field.maxLength} characters`
    };
  }

  if (field.pattern) {
    rules.pattern = {
      value: new RegExp(field.pattern),
      message: `${field.label} is invalid`
    };
  }

  if (field.min) {
    rules.min = {
      value: field.min,
      message: `Minimum value is ${field.min}`
    };
  }

  if (field.max) {
    rules.max = {
      value: field.max,
      message: `Maximum value is ${field.max}`
    };
  }

  return rules;
}