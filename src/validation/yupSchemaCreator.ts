import * as yup from "yup";
import type { FormItem } from "types/FormItem";

export function createYupSchema(schema: any, config: FormItem) {
  const { name, validationType, validations } = config;

  if (!yup[validationType as keyof typeof yup]) {
    return schema;
  }

  // @ts-ignore
  let validator = yup[validationType]();
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }

    validator = validator[type](...params);
  });
  schema[name as keyof typeof schema] = validator;
  return schema;
}
