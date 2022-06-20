import React, { useState, useEffect } from 'react';
import logo from "./logo.svg";
import "./App.scss";
import useSize from './hooks/useSize';
import styled  from 'styled-components';
import ThemeJson from './assets/theme.json';
import {ThemeContext, themes} from './context/theme-context';
import FormContext from "./context/form-context";
import  MortgageCalculator  from './pages/mortgage-calculator';
// import MortgageCalculatorDetailed from './layouts/detailed/mortgage-calculator-detailed.component';
import { useNavigate, Navigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

  const AppDiv = styled.div`
    background-color: ${props => props.theme.colors ? props.theme.colors.resultsBackgroundColor : "black"};
  `;


const App = (props) => {
  let navigate = useNavigate();
  const [target, currentSize, getDeviceType] = useSize();
  const {width, height} = currentSize;
  const [theme, setTheme] = useState({});
  const [form, setForm] = useState({});
  const value = { form, setForm };

  useEffect(() => {    
    // Update the document title using the browser API 
    const configJson = JSON.parse(props.config);
    let defaults = ThemeJson;

    let combined = {};
    objCombine(defaults, combined);
    objCombine(configJson, combined);

    setTheme(combined);


    navigate(`../${configJson.layout}`, { replace: true });
  }, [props]);

  function objCombine(obj, variable) {
    for (let key of Object.keys(obj)) {
      if(typeof obj[key] == "object"){
        if (!variable[key]) variable[key] = {};
      
        for (let innerKey of Object.keys(obj[key]))
        variable[key][innerKey] = obj[key][innerKey];
      }else{
        variable[key] = obj[key];
      }

    }
  }

 
  return (

    <>
        <ThemeContext.Provider value={theme}>
          <FormContext.Provider value={value}>
            <AppDiv theme={theme} className="App" ref={target} style={{width: "100%"}}>
            <div className={`${getDeviceType()}`} >
              {/* <MortgageCalculator getDeviceType={getDeviceType}></MortgageCalculator> */}


              <Routes>
                <Route path="/" element={<MortgageCalculator getDeviceType={getDeviceType}></MortgageCalculator>}></Route>
                <Route path="/simple" element={<MortgageCalculator getDeviceType={getDeviceType}></MortgageCalculator>}></Route>
                {/* <Route path="/detailed" element={<MortgageCalculatorDetailed getDeviceType={getDeviceType}></MortgageCalculatorDetailed>} ></Route> */}
                {/* <Route
                  path="*"
                  element={<Navigate to="/" />}
                /> */}
              </Routes>

            </div>

            </AppDiv>

          </FormContext.Provider>
        </ThemeContext.Provider>
    </>


  );
}

export default App;
