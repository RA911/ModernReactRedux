import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { message } = this.props;
        return <h1>{message}</h1>
    }
}

//const App = (params) => <h1>{params.message}</h1>;

ReactDOM.render(<App message='Hello niggas!' />, document.getElementById('app'));