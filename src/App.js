import { createRoot } from "react-dom/client";
import "./scss/main.scss";
import Pads from "./components/Pads";

const App = () => {
  return (
    <div className="container">
      <h1>Drum Machine</h1>
      <Pads />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App tab="home" />);
