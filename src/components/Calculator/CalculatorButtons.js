import React from 'react';
import '../../styles/CalculatorButtons.css'

const CalculatorButton = props => {

    return (
        <div className="ui fluid centered" onMouseDown={e => {
            e.stopPropagation();
            onButtonClick(e, props);
        }}>
            <div className="four ui buttons">
                <button className="ui teal button" id="C">C</button>
                <button className="ui teal icon button" id="DEL">
                    <i className="long arrow alternate left icon" id="DEL" />
                </button>
                <button className="ui teal button" id="%">%</button>
                <button className="ui teal button" id="/">/</button>
            </div>
            <div className="four ui buttons">
                <button className="ui button" id="7">7</button>
                <button className="ui button" id="8">8</button>
                <button className="ui button" id="9">9</button>
                <button className="ui teal button" id="*">*</button>
            </div>
            <div className="four ui buttons">
                <button className="ui button" id="4">4</button>
                <button className="ui button" id="5">5</button>
                <button className="ui button" id="6">6</button>
                <button className="ui teal button" id="-">-</button>
            </div>
            <div className="four ui buttons">
                <button className="ui button" id="1">1</button>
                <button className="ui button" id="2">2</button>
                <button className="ui button" id="3">3</button>
                <button className="ui teal button" id="+">+</button>
            </div>
            <div className="three ui buttons">
                <button className="ui button zero" id="0">0</button>
                <button className="ui button decimal" id=".">.</button>
                <button className="ui teal button equals" id="=">=</button>
            </div>
        </div>
    );
};

const onButtonClick = (e, props) => {
    //Pass input to parent CalculatorBase
    const input = e.target.id;
    props.onInput(input);
};

export default CalculatorButton;