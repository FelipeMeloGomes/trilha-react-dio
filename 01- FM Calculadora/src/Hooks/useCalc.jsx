import { useState } from "react";

export const useCalc = () => {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [firstNumber, setFirstNumber] = useState("0");
    const [operation, setOperation] = useState("0");

    const handleClear = () => {
        setCurrentNumber("0");
        setFirstNumber("0");
        setOperation("");
    };

    const handleAddNumber = (number) => {
        setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
    };

    const handleSumNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("+");
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
            setOperation("");
        }
    };
    const handleMinusNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("-");
        } else {
            const sum = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(sum));
            setOperation("");
        }
    };
    const handleMultiplyNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("*");
        } else {
            const sum = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(sum));
            setOperation("");
        }
    };
    const handleDivideNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("/");
        } else {
            const sum = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(sum));
            setOperation("");
        }
    };
    const handleEquals = () => {
        if (!firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
            switch (operation) {
                case "+":
                    handleSumNumbers();
                    break;
                case "-":
                    handleMinusNumbers();
                    break;
                case "*":
                    handleMultiplyNumbers();
                    break;
                case "/":
                    handleDivideNumbers();
                    break;
                default:
                    break;
            }
        }
    };

    return {
        currentNumber,
        setCurrentNumber,
        handleClear,
        handleAddNumber,
        handleSumNumbers,
        handleMinusNumbers,
        handleMultiplyNumbers,
        handleDivideNumbers,
        handleEquals,
    };
};
