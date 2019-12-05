import React from 'react';
import '../../styles/CalculatorResultsDisplay.css';

const CalculatorResultsDisplay = props => {
    return (
        <div className="ui fluid input">
            <input id="resultsDisplay" type="text" value={props.calculatedResult} disabled />
        </div>
    );
};

export default CalculatorResultsDisplay;