import Slider from "@mui/material/Slider";

function Input() {
  return (
    <div class="relative pt-1">
      <label for="customRange1" class="form-label">
        Example range
      </label>
      <input
        type="range"
        class="
        form-range
        appearance-none
        w-full
        h-6
        p-0
        bg-transparent
        focus:outline-none focus:ring-0 focus:shadow-none"
        id="customRange1"
      />
    </div>
  );
}

export default Input;
