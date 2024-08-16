export const callVapi = async (
  id_number_vapi: string,
  voice_assistant_id: string,
  numberTocall: string,
  setError: (error: string) => void
) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer e3e1fbaa-23d3-438b-83ce-33a03043dac8",
      "Content-Type": "application/json",
    },

    body: {
      phoneNumberId: id_number_vapi,
      assistantId: voice_assistant_id,
      customer: {
        number: numberTocall,
      },
    },
  };

  fetch("https://api.vapi.ai/call/phone", {
    ...options,
    body: JSON.stringify(options.body),
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => {
      console.error(err);
      setError("Error al realizar la llamada");
    });
};
