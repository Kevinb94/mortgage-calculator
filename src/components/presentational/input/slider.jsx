import Slider from "@mui/material/Slider";

function SliderInput() {
  return (
    <div>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </div>
  );
}

export default SliderInput;
