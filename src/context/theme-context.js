import React from 'react';
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
    colors: {
        primary: "",
        secondary: "",
        light: "yellow",
        dark: "black",
        lightText: "pink"
    }

});
  
// "#123242"
  