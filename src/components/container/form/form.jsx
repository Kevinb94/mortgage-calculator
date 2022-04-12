import * as React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import "./form.scss";

const MyButton = muiStyled("button")(({ theme }) => ({
  padding: ".7rem",
  backgroundColor: "#1565c0",
  color: "white",
  border: "none",
  borderRadius: ".4rem",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "30%",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: "15%",
  },
}));

function Form(props) {
  const InputTypes = props.type;
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="form-container">
      {InputTypes == "text" ? textFieldForm() : sliderForm()}
    </div>
  );

  function textFieldForm() {
    const FormDiv = styled.div`
      /* Adapt the colors based on primary prop */
      height: ${props.device == "desktop" ? "80%" : "70%"};
      display: grid;
    `;
    return (
      <FormDiv className="textfield-form">
        {/* <div className="form textfield-form"> */}
        <h1>Mortgage Calculator</h1>
        <FormControl sx={{ m: 1 }} variant="filled">
          {/* <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel> */}
          <label htmlFor="">Home Price</label>
          <FilledInput
            id="filled-adornment-amount"
            value={values.amount}
            onChange={handleChange("amount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="filled">
          {/* <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel> */}
          <label htmlFor="">Down Payment</label>
          <FilledInput
            id="filled-adornment-amount"
            value={values.amount}
            onChange={handleChange("amount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="filled">
          {/* <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel> */}
          <label htmlFor="">Interest Rate</label>
          <FilledInput
            id="filled-adornment-amount"
            value={values.amount}
            onChange={handleChange("amount")}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <label htmlFor="">Loan Term</label>
          <Select
            value={"Sixty"}
            onChange={handleChange("amount")}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={10}>30</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>15</MenuItem>
          </Select>
        </FormControl>

        {props.isMobile ? (
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Button
              onClick={() => props.toggleShowResults({ name: "Godrick" })}
              variant="contained"
            >
              Get Results
            </Button>
          </FormControl>
        ) : null}

        {!props.isMobile ? (
          <FormControl md={{ maxWidth: 50 }} sm={{ maxWidth: 50 }}>
            <MyButton variant="contained">Save Results</MyButton>
          </FormControl>
        ) : null}
      </FormDiv>
    );
  }

  function sliderForm() {
    return (
      <div className="form form-sliders">
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </div>
    );
  }
}

export default Form;
