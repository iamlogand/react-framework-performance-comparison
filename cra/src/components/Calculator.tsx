import React, { useState } from 'react';

import style from "./Calculator.module.css";

interface CalculatorState {
  input: string;
  result: string;
}

const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    input: '',
    result: '',
  });

  const handleInput = (value: string) => {
    setState((prevState) => ({ ...prevState, input: prevState.input + value }));
  };

  const clearInput = () => {
    setState({ input: '', result: '' });
  };

  const calculateResult = () => {
    try {
      const evaluated = eval(state.input);
      setState((prevState) => ({ ...prevState, result: evaluated.toString() }));
    } catch (error) {
      setState((prevState) => ({ ...prevState, result: 'Error' }));
    }
  };

  return (
    <div className={style.calc}>
      <h1>Simple Calculator</h1>
      <div>
        <input type="text" value={state.input} readOnly />
        <input type="text" value={state.result} readOnly />
      </div>
      <div>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((number) => (
          <button key={number} onClick={() => handleInput(number)}>
            {number}
          </button>
        ))}
      </div>
      <div>
        {['+', '-', '*', '/'].map((operator) => (
          <button key={operator} onClick={() => handleInput(operator)}>
            {operator}
          </button>
        ))}
      </div>
      <div>
        <button onClick={clearInput}>Clear</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
