import r2wc from "@r2wc/react-to-web-component";
import App from "./App";
import "./index.css";

const ctcAgentmaster = r2wc(App, {
  props: {
    id_number_vapi: "string",
    voice_assistant_id: "string",
    btnColor: "string",
  },
});

customElements.define("ctc_agentmaster", ctcAgentmaster);
