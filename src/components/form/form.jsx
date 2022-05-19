import React, { useContext } from "react";
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
import { ThemeContext } from "../../context/theme-context";
import { FormContext } from "../../context/form-context";
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

const FormButton = styled.button`
  /* Adapt the colors based on primary prop */
  padding: 0.4em;
  color: white;
  border: none;
  border-radius: 0.4em;
  background-color: ${(props) =>
    props.colors ? props.colors.lightButton : "black"};
`;

const FormDiv = styled.div`
  /* Adapt the colors based on primary prop */

  display: grid;
`;

const FormLabel = styled.div`
  /* Adapt the colors based on primary prop */
  color: ${(props) => (props.colors ? props.colors.formLabels : "black")};
  font-size: ${(props) =>
    props.fontSizes ? props.fontSizes.formLabels : "1em"};
`;

const FormHeader = styled.h1`
  /* Adapt the colors based on primary prop */
  color: ${(props) => (props.colors ? props.colors.headerText : "black")};
  font-size: ${(props) =>
    props.fontSizes ? props.fontSizes.headerText : "black"};
`;

function Form(props) {
  const InputTypes = props.type;
  const { form, setForm } = useContext(FormContext);
  const [values, setValues] = React.useState({
    price: "",
    downPaymentType: "",
    downPayment: "",
    interestRate: "",
    loanTerm: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <ThemeContext.Consumer>
      {({ colors, fontSizes }) => (
        <div className="form-container">
          {InputTypes == "text"
            ? textFieldForm(colors, fontSizes)
            : sliderForm(colors, fontSizes)}
        </div>
      )}
    </ThemeContext.Consumer>
  );
  // height: ${props.device == "desktop" ? "80%" : "70%"};
  function textFieldForm(colors, fontSizes) {
    return (
      <FormDiv className="textfield-form">
        {/* <div className="form textfield-form"> */}
        <FormHeader colors={colors} fontSizes={fontSizes}>
          Mortgage Calculator
        </FormHeader>
        <FormControl sx={{ m: 1 }} variant="filled">
          {/* <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel> */}
          <FormLabel colors={colors} fontSizes={fontSizes} htmlFor="">
            Home Price
          </FormLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={values.price}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            name="price"
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="filled">
          {/* <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel> */}
          <FormLabel colors={colors} fontSizes={fontSizes} htmlFor="">
            Down Payment
          </FormLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={values.downPayment}
            onChange={handleChange}
            name="downPayment"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="filled">
          {/* <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel> */}
          <FormLabel colors={colors} fontSizes={fontSizes} htmlFor="">
            Interest Rate
          </FormLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={values.interestRate}
            onChange={handleChange}
            name="interestRate"
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <FormLabel colors={colors} fontSizes={fontSizes} htmlFor="">
            Loan Term
          </FormLabel>
          <Select
            value={values.loanTerm}
            onChange={handleChange}
            name="loanTerm"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={10}>30 years</MenuItem>
            <MenuItem value={20}>20 years</MenuItem>
            <MenuItem value={30}>15 years</MenuItem>
            <MenuItem value={30}>10 years</MenuItem>
          </Select>
        </FormControl>

        <div className="button-group">
          <FormControl className="get-results">
            <FormButton
              onClick={() => setForm(values)}
              variant="contained"
              colors={colors}
            >
              Get Results
            </FormButton>
          </FormControl>

          <FormControl className="save-results">
            <FormButton colors={colors} variant="contained">
              Save Results
            </FormButton>
          </FormControl>
        </div>
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
