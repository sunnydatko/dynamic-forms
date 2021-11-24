import { Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { RenderFormElement } from "helpers/forms";
import { FORM_ITEMS } from "helpers/formItems";
import type { FormItem } from "types/FormItem";
import { createYupSchema } from "validation/yupSchemaCreator";

const DynamicForm = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  const initialValues: { [name: string]: string } = {};
  FORM_ITEMS.forEach(({ name }: FormItem) => {
    initialValues[name] = "";
  });

  const yupSchema = FORM_ITEMS.reduce(createYupSchema, {});
  const validateSchema = yup.object().shape(yupSchema);

  return (
    <Container
      sx={{
        height: "100vh",
        paddingTop: 3,
      }}
    >
      <Typography gutterBottom variant={matchesSm ? "h4" : "h2"}>
        Reservation Form
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: typeof initialValues) => {
          setOpen(true);
        }}
        validationSchema={validateSchema}
      >
        {({ values }) => (
          <Form id="custom-form">
            <Box display="flex" flexDirection="column" gap={theme.spacing(2)}>
              {FORM_ITEMS.sort((a: FormItem, b: FormItem) =>
                a.index - b.index ? 1 : -1
              ).map((item: FormItem) => {
                return RenderFormElement(item);
              })}
            </Box>
            <Box
              display="flex"
              marginY={2}
              gap={2}
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", sm: "flex-end" },
              }}
            >
              <Button fullWidth={matchesSm} type="submit" variant="contained">
                Save
              </Button>
            </Box>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setOpen(false)}
            >
              <Alert severity="success" sx={{ width: "100%" }}>
                <AlertTitle>Reservation confirmed</AlertTitle>
                Name: {values.name}
                <br />
                Email: {values.email}
                <br />
                Meal type:
                {` ${values.meal_type
                  .charAt(0)
                  .toUpperCase()}${values.meal_type.slice(1)}`}
                <br />
                Champagne Toast: {values.champagne ? "Yes" : "No"}
              </Alert>
            </Snackbar>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default DynamicForm;
