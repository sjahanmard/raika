import { useCallback, useEffect, useRef, useState } from "react";
import { factorial } from "../../utils";
import styles from "./styles.module.css";

const App = () => {
  // States & refs
  const [numbers, setNumbers] = useState([]);
  const factorialCache = useRef(new Map());
  const numberInputRef = useRef();

  // Callbacks
  const addNumberList = useCallback(
    (number) => {
      number = Number(number);
      if (Number.isFinite(number)) {
        setNumbers((prev) => [...prev, { [number]: null }]);
      } else {
        alert("Please enter a valid number");
      }
    },
    [setNumbers]
  );

  const getFactorial = useCallback((num) => {
    let value = factorialCache.current.get(num);
    if (value) return value;
    value = factorial(num);
    factorialCache.current.set(num, value);
    return value;
  }, []);
  const preventDefault = useCallback((e) => e?.preventDefault(), []);

  useEffect(() => {
    let _numbers = JSON.parse(JSON.stringify(numbers));
    for (let i = 0; i < numbers?.length; i++) {
      const numKey = Object.keys(numbers[i])?.[0];
      const fac = getFactorial(numKey);
      _numbers[i] = { [numKey]: fac };
    }
    setNumbers(_numbers);
  }, [numbers?.length]);

  return (
    <div>
      <form onSubmit={preventDefault}>
        <h2 className={styles.appTitle}>Factorial!</h2>
        <br />
        <label htmlFor="number-input">Enter a number from 0 to 9999</label>
        <input
          className={styles.numberInput}
          type="number"
          name="number-input"
          id="number-input"
          ref={numberInputRef}
        />
        <br />
        <button onClick={() => addNumberList(numberInputRef?.current?.value)}>
          Add For Calculation
        </button>
        <hr />
        <h2>Output</h2>
      </form>
      <ul>
        {numbers.map((item, index) => {
          const num = Object.keys(item)?.[0];
          return (
            <li key={num + index} className={styles.listItem}>
              <strong>Result of {num}! is:</strong>
              <br />
              <code>{item[num]}...</code>
              <button
                className={styles.smallButton}
                onClick={() => {
                  navigator.clipboard.writeText(numbers[num]);
                }}
              >
                Copy
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
