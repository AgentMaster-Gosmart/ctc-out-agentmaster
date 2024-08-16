import React, { useState } from "react";
import { callVapi } from "../utils/vapi";

type FormProps = {
  id_number_vapi: string;
  voice_assistant_id: string;
  btnColor: string;
};

const Form = ({ id_number_vapi, voice_assistant_id, btnColor }: FormProps) => {
  const [formData, setFormData] = useState({
    phone: "",
  });
  console.log(btnColor);
  const { phone } = formData;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    callVapi(id_number_vapi, voice_assistant_id, phone, setError);
    setTimeout(() => {
      setLoading(false);
      setSuccess("Llamada realizada con éxito");
      setFormData({
        phone: "",
      });
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <form
      className='flex flex-col justify-center items-start w-full'
      onSubmit={handleSubmit}>
      <input
        style={{
          borderColor: "#d1d5db",
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          marginTop: "8px",
        }}
        type='text'
        name='phone'
        id='phone'
        placeholder=' Tu número de teléfono para llamarte '
        onChange={handleChange}
      />
      {error && <p className='text-red-500 mt-2'>{error}</p>}
      {success && <p className='text-green-500 mt-2'>{success}</p>}

      <button
        disabled={!formData.phone}
        style={
          !formData.phone
            ? {
                background: "#ccc",
                padding: "8px",
                marginTop: "8px",
                borderRadius: "4px",
                cursor: "none",
                width: "100%",
                textAlign: "center",
              }
            : {
                background: btnColor,
                padding: "8px",
                marginTop: "8px",
                borderRadius: "4px",
                width: "100%",
                color: "white",
                textAlign: "center",
              }
        }
        type='submit'>
        {loading ? "Llamando..." : "Llamar"}
      </button>
    </form>
  );
};

export default Form;
