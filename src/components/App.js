import React from 'react';

import Calculator from './Calculator/CalculatorBase';
import '../styles/App.css';


const App = () => {

    return (
        <div className="ui container" >
            <div className="ui centered teal header">
                <h1><i className="ui icon react" />React Calculator<i className="ui icon calculator" /></h1>

            </div>
            <div className="ui container middle aligned center aligned grid">
                <Calculator />
            </div>
        </div>
    );
};

export default App;