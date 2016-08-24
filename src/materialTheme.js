import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';

const buildMuiTheme = (userAgent) => {
  getMuiTheme({
    palette: {
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: green100,
    },
  }, {
    avatar: {
      borderColor: null,
    },
    userAgent: userAgent,
  });
}

class Main extends React.Component {
  render() {
    console.log('got props' + this.props);
    return (
      <MuiThemeProvider muiTheme={this.props.theme}>
      </MuiThemeProvider>
    );
  }
}

export { Main, buildMuiTheme };
