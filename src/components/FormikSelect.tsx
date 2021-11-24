import { InputLabel, MenuItem, Select, Typography } from "@mui/material";
import type { Option } from "types/FormItem";

export interface Props {
  children: any;
  field: any;
  form: { touched: []; errors: [] };
  label: string;
  name?: string;
  options?: any;
}

const renderOptions = (options: Option[]) => {
  return options.map((option) => (
    <MenuItem key={option.label} value={option.value} />
  ));
};

const FormikSelect = ({
  children,
  field,
  form: { touched, errors },
  label,
  name,
  options,
  ...props
}: Props) => {
  const fieldName = name || field.name;
  console.log(field.value);
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select {...field} {...props} name={fieldName} label={label} row>
        {/* Here you either map over the props and render radios from them,
         or just render the children if you're using the function as a child*/}
        {options ? renderOptions(options) : children}
      </Select>

      {touched[fieldName] && errors[fieldName] && (
        <Typography color="error">{errors[fieldName]}</Typography>
      )}
    </>
  );
};

export default FormikSelect;
