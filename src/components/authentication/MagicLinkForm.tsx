import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikValues,
  FormikErrors,
} from "formik";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@component/buttons/Button";

type FormValues = {
  email: string;
};

function handleValidation(values: FormValues): FormikErrors<FormValues> {
  const { email } = values;
  const errors: FormikErrors<FormValues> = {};

  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}

function handleSubmit(
  values: FormikValues,
  setSubmitting: (isSubmitting: boolean) => void
) {
  const { email } = values as { email: string };
  signIn("email", {
    email,
  }).finally(() => {
    setSubmitting(false);
  });
}

export function MagicLinkForm() {
  return (
    <Formik
      initialValues={{ email: "" }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={handleValidation}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-5">
          <div>
            <label htmlFor={"email"} className="font-medium">
              Email
            </label>
            <Field
              className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
              type="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <Button
            className={"w-full"}
            label={"Login"}
            isLoading={isSubmitting}
            type={"submit"}
          />
        </Form>
      )}
    </Formik>
  );
}
