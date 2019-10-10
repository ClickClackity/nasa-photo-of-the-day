import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
//

const Box = styled.div`${palette}${spacing}${typography}`;
const theme = createMuiTheme({  
  typography: {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Monospace',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
},
});


const Display = ({ title, url, date, media_type, explanation }) => {
  return (
    <div className="container">
      <Box
      bgcolor="text.hint"
      fontFamily="Monospace"
      fontStyle="oblique"
      >
        <h1>
          {title}
        </h1>
      </Box>
      {media_type === "image" ? (
        <img src={url} alt={title} />
      ) : (
        <span className="alert-span">
          Error: ( {title} ) does not have a valid image extension!
        </span>
      )}
      <NoSsr>
        <ThemeProvider theme={theme}>
          <Box
            border={1}
            boxShadow={3}
            color="grey.500"
            bgcolor="secondary.main"
          >
          {explanation}
          </Box>
          <Box fontWeight="fontWeightBold" fontStyle="italic" letterSpacing={10} className="date" textAlign="center" bgcolor="error.main">{date}</Box>
        </ThemeProvider>
      </NoSsr>
    </div>
  );
};

export default Display;
