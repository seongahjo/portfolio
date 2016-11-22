import React from 'react';
import ReactDom from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './main';

injectTapEventPlugin();
  class Main extends React.Component{
    render(){
      return(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  )
  }
}

ReactDom.render(<Main />, document.getElementById('app'));
