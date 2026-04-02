import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "x",
  divide = "/",
  no = "",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>("0");
  const [currentNumber, setCurrentNumber] = useState<string>("0");
  const [prevNumber, setPrevNumber] = useState<string>("0");

  const lastOperation = useRef<Operator>(Operator.no);

  useEffect(() => {
    if (lastOperation.current !== Operator.no) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(
        `${firstFormulaPart} ${lastOperation.current} ${currentNumber}`,
      );
    } else {
      setFormula(currentNumber);
    }
  }, [currentNumber]);

  useEffect(() => {
    // setFormula(currentNumber);
  }, [currentNumber]);

  const clean = () => {
    setCurrentNumber("0");
    setPrevNumber("0");
    setFormula("0");
    lastOperation.current = Operator.no;
  };

  const toggleSign = () => {
    if (currentNumber === "0") return;
    if (currentNumber.includes("-"))
      return setCurrentNumber(currentNumber.slice(1));
    return setCurrentNumber("-" + currentNumber);
  };

  const deleteLastNumber = () => {
    if (currentNumber === "0") return;

    if (
      currentNumber.length === 1 ||
      (currentNumber.length === 2 && currentNumber.includes("-"))
    )
      return setCurrentNumber("0");

    return setCurrentNumber(currentNumber.slice(0, currentNumber.length - 1));
  };

  const setLastNumber = () => {
    if (currentNumber.endsWith(".")) setPrevNumber(currentNumber.slice(0, -1));

    setPrevNumber(currentNumber);
    setCurrentNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const buildNumber = (numberString: string) => {
    if (currentNumber.includes(".") && numberString === ".") return;

    if (currentNumber.startsWith("0") || currentNumber.startsWith("-0")) {
      if (numberString === ".")
        return setCurrentNumber(currentNumber + numberString);

      if (numberString === "0" && currentNumber.includes("."))
        return setCurrentNumber(currentNumber + numberString);

      if (numberString !== "0" && !currentNumber.includes("."))
        return setCurrentNumber(numberString);

      if (numberString === "0" && !currentNumber.includes(".")) return;
    }

    setCurrentNumber(currentNumber + numberString);
  };

  return {
    //Props
    formula,
    currentNumber,
    prevNumber,
    //Methods
    buildNumber,
    clean,
    toggleSign,
    deleteLastNumber,
    divideOperation,
    multOperation,
    subOperation,
    addOperation,
  };
};
