import * as React from "react";
import { useForm, useFormState } from "react-hook-form";
import "./App.css";
// import { ErrorMessage } from "@hookform/error-message";


let renderCount = 0;

export default function App() {
  const {
    register,
    handleSubmit,
    // formState: { errors }, 
    control } = useForm({
      defaultValues: {
        firstName: "firstName"
      }
    });
  const { dirtyFields } = useFormState({
    control
  });
  const onSubmit = (data) => console.log(data);
  renderCount++;

  return (
    <div>
      <div>
        <span>Render Count: {renderCount}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        {dirtyFields.firstName && <p>Field is dirty.</p>}
        <input type="submit" />
      </form>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ErrorMessage</h1>
        <input
          {...register("singleErrorInput", {
            required: "This is required message"
          })}
        />
        <ErrorMessage errors={errors} name="singleErrorInput" as="p" />

        <input type="submit" />
      </form> */}
    </div>
  );
}
