
import { useState } from "react"
import './App.css';
import { useForm } from "react-hook-form";
import Headers from "./Header";


function App() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Headers />
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      <p style={{ color: '#000' }}>{result}</p>
      <input type="submit" />
    </form>
  );
}

export default App;
