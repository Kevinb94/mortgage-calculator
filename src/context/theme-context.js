import React from 'react';
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
    colors: {
        bodyBackgroundColor: "yellow",
        resultsBackgroundColor: "black",
        resultButtonText: "white",
        resultsText: "pink",
        headerText: "black",
        formLabels: "black",
        resultButton: "orange",
        borderBottom: '#c1c1c166',
        formButton: "#0d82bd"
    },
    fontSizes: {
        formLabels: "3em",
        headerText: "2.5rem"
    },
    layout: "simple"

});
  
// "#123242"
  