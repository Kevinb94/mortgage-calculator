import React, { useState, useEffect } from 'react';
import logo from "./logo.svg";
import "./App.scss";
import useSize from './hooks/useSize';
import MortgageCalculatorDesktop from './layouts/simple/mortgage-calculator-desktop';
import MortgageCalculatorMobile from "./layouts/simple/mortgage-calculator-mobile";
import styled  from 'styled-components';
import { DriveEtaRounded } from '@mui/icons-material';
import {ThemeContext, themes} from './context/theme-context';
import  MortgageCalculator  from './layouts/simple/mortgage-calculator';
import MortgageCalculatorDetailed from './layouts/detailed/mortgage-calculator-detailed.component';
import { useNavigate, Navigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

  const AppDiv = styled.div`
    background-color: ${props => props.theme.colors ? props.theme.colors.dark : "black"};
  `;


const App = (props) => {
  let navigate = useNavigate();
  const [target, currentSize, getDeviceType] = useSize();
  const {width, height} = currentSize;
  const [theme, setTheme] = useState({});


  useEffect(() => {    
    // Update the document title using the browser API 
    const configJson = JSON.parse(props.config);

    setTheme(configJson);
    console.log(configJson);

    navigate(`../${configJson.layout}`, { replace: true });
  }, [props]);

  

 
  return (

    <>
        <ThemeContext.Provider value={theme}>

          <AppDiv theme={theme} className="App" ref={target} style={{width: "100%"}}>
          <div className={`${getDeviceType()}`} >
            {/* <MortgageCalculator getDeviceType={getDeviceType}></MortgageCalculator> */}


            <Routes>
              <Route path="/" element={<MortgageCalculator getDeviceType={getDeviceType}></MortgageCalculator>}></Route>
              <Route path="/simple" element={<MortgageCalculator getDeviceType={getDeviceType}></MortgageCalculator>}></Route>
              <Route path="/detailed" element={<MortgageCalculatorDetailed getDeviceType={getDeviceType}></MortgageCalculatorDetailed>} ></Route>
              <Route
                path="*"
                element={<Navigate to="/" />}
              />
            </Routes>

          </div>

          </AppDiv>


        </ThemeContext.Provider>
    </>


  );
}

export default App;
