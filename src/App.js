import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import useWindowDimensions from "./hooks/use-windows-dimensions";
import MobileView from "./device/mobile";
import DesktopView from "./device/desktop";
import FormContext from "./context/form-context";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Input from "./components/presentational/input/tailwind.inputs";
import MaterialInput from "./components/presentational/input/material.inputs";
function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="material-input" element={<MaterialInput />} />
      </Routes>
      {/* <FormContext.Provider value={''} >
        {
          width > 700 
            ? <DesktopView></DesktopView>
            : <MobileView></MobileView>
        }
        <h1 className="text-3xl font-bold underline">width: {width} ~ height: {height}</h1>
        <Button variant="primary" className="btn-primary">Primary</Button>

        {
          [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ))
        }
      </FormContext.Provider> */}
    </div>
  );
}

export default App;
