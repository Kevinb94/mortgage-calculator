import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import useWindowDimensions from "./hooks/use-windows-dimensions";
import MobileView from "./device/mobile";
import DesktopView from "./device/desktop";
import FormContext from "./context/form-context";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Input from "./components/presentational/input/tailwind.inputs";
import SliderInput from "./components/presentational/input/slider";
import Form from "./components/container/form/form";

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      <Routes>
        {width > 800 ? (
          <Route path="/" element={<DesktopView />} />
        ) : (
          <Route path="/" element={<MobileView />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
