import React from 'react';
import { evaluate } from 'mathjs';

import CalculatorResultsDisplay from './CalculatorResultsDisplay';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtons from './CalculatorButtons';
import '../../styles/CalculatorBase.css';


class CalculatorBase extends React.Component {
    state = { calculatedResult: 0, screenValue: '' };

    onInput = (input) => {
        if (input === "=") {
            this.evaluate();
        } else if (input === "C") {
            this.clear();
        } else if (input === "DEL") {
            this.delete();
        } else {
            this.clear();
            this.setState({ screenValue: this.state.screenValue + input });
        }

    }

    render() {
        return (
            <div className="calculator ui">
                <CalculatorResultsDisplay calculatedResult={this.state.calculatedResult} />
                <CalculatorDisplay screenValue={this.state.screenValue} />
                <CalculatorButtons onInput={this.onInput} />
            </div>
        );
    }

    evaluate() {
        const result = evaluate(this.state.screenValue);
        console.log(result);
        this.setState({ calculatedResult: result });
    }

    clear() {
        this.setState({ calculatedResult: 0, screenValue: '' });
    }

    delete() {
        this.clear();
        this.setState({ screenValue: this.state.screenValue.slice(0, -1) })
    }
}

export default CalculatorBase;