import React from "react";
import Form from "./components/Form";

interface AppProps {
  id_number_vapi: string;
  voice_assistant_id: string;
  btnColor: string;
}

function App({ id_number_vapi, voice_assistant_id, btnColor }: AppProps) {
  console.log(id_number_vapi, voice_assistant_id, btnColor);

  return (
    <div className='flex fle-col justify-center p-4 w-[400px]'>
      <Form
        id_number_vapi={id_number_vapi}
        voice_assistant_id={voice_assistant_id}
        btnColor={btnColor}
      />
    </div>
  );
}

export default App;
