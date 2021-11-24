export interface FormItem {
  disabled: boolean;
  id: number;
  index: number;
  label: string;
  name: string;
  options_list_items?: Option[];
  placeholder: string | null;
  required: boolean;
  type: string;
  validationType: string;
  validations: Validation[];
  values?: any;
}

export interface Option {
  label: string;
  value: string | number;
}

export interface Validation {
  type: string;
  params: any[];
}
