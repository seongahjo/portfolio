import React from 'react';
import AppBar from 'material-ui/AppBar'
import Content from './content';
//<AppBar title="My AppBar" />
//<Content text="test"/>

class App extends React.Component {

    render() {
        return (
            <div>
                <AppBar title="Portfolio"/>
                <Content/>
            </div>
        )
    }
}

export default App;
