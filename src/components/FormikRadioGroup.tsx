import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import type { Option } from "types/FormItem";

export interface Props {
  children: any;
  field: any;
  form: { touched: []; errors: [] };
  name?: string;
  options?: any;
}

const renderOptions = (options: Option[]) => {
  return options.map((option) => (
    <FormControlLabel
      control={<Radio />}
      key={option.label}
      label={option}
      value={option}
    />
  ));
};

const FormikRadioGroup = ({
  children,
  field,
  form: { touched, errors },
  name,
  options,
  ...props
}: Props) => {
  const fieldName = name || field.name;

  return (
    <>
      <RadioGroup {...field} {...props} name={fieldName} row>
        {/* Here you either map over the props and render radios from them,
         or just render the children if you're using the function as a child*/}
        {options ? renderOptions(options) : children}
      </RadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <Typography color="error">{errors[fieldName]}</Typography>
      )}
    </>
  );
};

export default FormikRadioGroup;
