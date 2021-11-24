import { Field } from "formik";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
} from "@mui/material";

import { FormikTextField } from "components/FormikTextField";
import FormikRadioGroup from "components/FormikRadioGroup";
import FormikSelect from "components/FormikSelect";
import type { FormItem } from "types/FormItem";

export const RenderFormElement = ({
  disabled,
  id,
  label,
  type,
  options_list_items,
  placeholder,
  name,
  required,
}: FormItem) => {
  switch (type) {
    case "text":
      return (
        <FormControl key={id}>
          <Field
            component={FormikTextField}
            disabled={disabled}
            id={String(id)}
            fullWidth
            label={label}
            margin="dense"
            name={name}
            placeholder={placeholder}
            required={required}
            variant="outlined"
          ></Field>
        </FormControl>
      );

    case "radio":
      return (
        <FormControl key={id} required={required}>
          <FormLabel>{label}</FormLabel>
          <Field name={name}>
            {({ field, form }: { field: any; form: any }) => {
              return (
                <FormikRadioGroup form={form} field={field}>
                  {options_list_items?.map((option) => (
                    <FormControlLabel
                      control={<Radio />}
                      key={option.label}
                      label={option.label}
                      value={Boolean(option.value)}
                    />
                  ))}
                </FormikRadioGroup>
              );
            }}
          </Field>
        </FormControl>
      );
    case "select":
      return (
        <FormControl key={id} required={required}>
          <Field name={name}>
            {({ field, form }: { field: any; form: any }) => {
              return (
                <FormikSelect label={label} form={form} field={field}>
                  {options_list_items?.map(({ label, value }) => (
                    <MenuItem key={label} value={value}>
                      {label}
                    </MenuItem>
                  ))}
                </FormikSelect>
              );
            }}
          </Field>
        </FormControl>
      );

    default:
      return (
        <div key={id}>
          <span>Invalid Field {name}</span>
        </div>
      );
  }
};
