import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import './App.css';

function NestedInput() {
  const { register } = useFormContext();
  return <input {...register("test")} />;
}

export default function App() {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <label>Nested Input</label>
        <NestedInput />
        <label>Test</label>
        <input />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

