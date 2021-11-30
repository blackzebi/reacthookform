import * as React from "react";
import { useController, useForm } from "react-hook-form";
import './App.css';

let renderCount = 0;

const Checkboxes = ({ options, control, name }) => {
  const { field } = useController({
    control,
    name
  });
  const [value, setValue] = React.useState(field.value || []);
  return (
    <>
    <div>
      <label>test</label>
    </div>
      {options.map((option, index) => (
        <input
          onChange={(e) => {
            const valueCopy = [...value];
            valueCopy[index] = e.target.checked ? e.target.value : null;
            field.onChange(valueCopy);
            setValue(valueCopy);
          }}
          key={option}
          type="checkbox"
          checked={value.includes(option)}
          value={option}
        />
      ))}
    </>
  );
};

function Input(props) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

export default function App() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      controlled: ["a"],
      uncontrolled: ["A"],
      FirstName: ""
    },
    mode: "onChange"
  });
  const onSubmit = (data) => console.log(data);
  renderCount++;

  return (
    <div>
      <div>
        <h1>Check Boxes</h1>
        <span>render Count: {renderCount}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h2>uncontrolled</h2>
          <input {...register("uncontrolled")} type="checkbox" value="A" />
          <input {...register("uncontrolled")} type="checkbox" value="B" />
          <input {...register("uncontrolled")} type="checkbox" value="C" />
        </section>

        <section>
          <h2>controlled</h2>
          <Checkboxes
            options={["a", "b", "c"]}
            control={control}
            name="controlled"
          />
        </section>
        <input type="submit" />
      </form>
      <div style={{ marginTop: '10em' }}>
        <h1>useController Text Field</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input control={control} name="FirstName" rules={{ required: true }} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
