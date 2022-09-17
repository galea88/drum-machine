import Pad from "./Pad";
import samples from "../assets/audio/samples.js";

const Pads = () => {
  return (
    <div className="pad-wrapper">
      {samples.map((sample) => {
        return <Pad key={sample.id} sample={sample} />;
      })}
    </div>
  );
};

export default Pads;
