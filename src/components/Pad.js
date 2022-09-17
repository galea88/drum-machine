const Pad = (props) => {
  const playSound = () => {
    document.getElementById(props.sample.name).pause();
    document.getElementById(props.sample.name).currentTime = 0;
    document.getElementById(props.sample.name).play();
    document.querySelector("." + props.sample.name).classList.add("active");

    function mouseDown() {
      document
        .querySelector("." + props.sample.name)
        .classList.remove("active");
      document
        .querySelector("." + props.sample.name)
        .removeEventListener("mouseup", mouseDown);
    }

    document
      .querySelector("." + props.sample.name)
      .addEventListener("mouseup", mouseDown);
  };

  return (
    <div className={`pad ${props.sample.name}`} onMouseDown={playSound}>
      <label>{props.sample.name}</label>
      <audio id={props.sample.name} src={props.sample.audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

export default Pad;
