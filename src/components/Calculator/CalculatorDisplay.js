import React from 'react';
import '../../styles/CalculatorDisplay.css';

const CalculatorDisplay = props => {
    return (
        <div className="ui fluid input">
            <input id="inputDisplay" type="text" value={renderInput(props)} disabled />
        </div>
    );
};

const renderInput = props => {
    const input = props.screenValue;
    return input;
};

export default CalculatorDisplay;