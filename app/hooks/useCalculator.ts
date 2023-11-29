import { useState, useRef } from 'react';

enum Operators {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '×',
  DIVIDE = '÷',
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const mountOperation = (num: string) => {
    if (number.includes('.') && num === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (num === '.') {
        setNumber(number + num);
      } else if (num === '0' && number.includes('.')) {
        setNumber(number + num);
      } else if (num !== '0' && !number.includes('.')) {
        setNumber(num);
      } else if (num === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + num);
      }
    } else {
      setNumber(number + num);
    }
  };

  const changePositiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteLastNumber = () => {
    let negative = '';
    let numTemp = number;

    if (previousNumber !== '0') return;

    if (number.includes('-')) {
      negative = '-';
      numTemp = number.substring(1);
    }

    if (numTemp.length > 1) {
      setNumber(negative + numTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const passNumberUp = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const addOperation = () => {
    passNumberUp();
    lastOperation.current = Operators.ADD;
  };

  const subtractOperation = () => {
    passNumberUp();
    lastOperation.current = Operators.SUBTRACT;
  };

  const multiplyOperation = () => {
    passNumberUp();
    lastOperation.current = Operators.MULTIPLY;
  };

  const divideOperation = () => {
    passNumberUp();
    lastOperation.current = Operators.DIVIDE;
  };

  const calculate = () => {
    const num1 = Number(previousNumber);
    const num2 = Number(number);

    if (num1 === 0 || num2 === 0) return;

    switch (lastOperation.current) {
      case Operators.ADD:
        setNumber((num1 + num2).toString());
        break;
      case Operators.SUBTRACT:
        setNumber((num1 - num2).toString());
        break;
      case Operators.MULTIPLY:
        setNumber((num1 * num2).toString());
        break;
      case Operators.DIVIDE:
        setNumber((num1 / num2).toString());
        break;
    }
    setPreviousNumber(`${num1} ${lastOperation.current} ${num2}`);
  };

  return {
    number,
    previousNumber,
    clean,
    mountOperation,
    changePositiveNegative,
    deleteLastNumber,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculate,
  };
};
