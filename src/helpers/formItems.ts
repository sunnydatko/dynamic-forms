import { FormItem } from "types/FormItem";

export const FORM_ITEMS: FormItem[] = [
  {
    disabled: false,
    id: 254527,
    index: 1,
    label: "Name",
    name: "name",
    placeholder: null,
    required: true,
    type: "text",
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["this field is required"],
      },
    ],
  },
  {
    disabled: false,
    id: 254526,
    index: 2,
    label: "Email",
    name: "email",
    placeholder: null,
    required: true,
    type: "text",
    validations: [
      {
        type: "required",
        params: ["required"],
      },
      {
        type: "email",
        params: ["invalid email"],
      },
    ],
    validationType: "string",
  },
  {
    disabled: false,
    id: 254521,
    index: 3,
    label: "Meal Type",
    name: "meal_type",
    placeholder: null,
    required: true,
    type: "select",
    options_list_items: [
      {
        label: "Chicken",
        value: "chicken",
      },
      {
        label: "Fish",
        value: "fish",
      },
      {
        label: "Vegetarian",
        value: "vegetarian",
      },
    ],
    validationType: "string",
    validations: [],
  },
  {
    disabled: false,
    id: 254528,
    index: 4,
    label: "Champagne toast?",
    name: "champagne",
    placeholder: null,
    required: false,
    type: "radio",
    options_list_items: [
      {
        label: "Yes",
        value: 1,
      },
      {
        label: "No",
        value: 0,
      },
    ],
    validationType: "boolean",
    validations: [],
  },
];
