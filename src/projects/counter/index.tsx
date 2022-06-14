import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./counter.module.css";

export const CounterProject = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <h1>Counter</h1>
      <div className={styles.counterWrapper}>
        <div>
          <button
            className={styles.iconButton}
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
        <h1>{count}</h1>
        <div>
          <button
            className={styles.iconButton}
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
