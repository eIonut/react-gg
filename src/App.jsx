import { useState } from "react";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { useDefault } from "./hooks/useDefault";
import { useToggle } from "./hooks/useToggle";
import { usePrevious } from "./hooks/usePrevious";
import React from "react";
import { useFavicon } from "./hooks/useFavicon";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";
// import { useInterval } from "./hooks/useInterval";
import { useCounter } from "./hooks/useCounter";
import { useQueue } from "./hooks/useQueue";
import { QueueDemo } from "./components/Queue";

function App() {
  const [count, setCount] = useState(0);
  const initialValue = { name: "Ionut" };
  const defaultValue = { name: "Este valoare nula" };
  const [name, setName] = useDefault(initialValue, defaultValue);
  const [toggle, setToggle] = useToggle(false);
  const [color, setColor] = React.useState(getRandomColor());
  const previousColor = usePrevious(color);
  useDocumentTitle(`Clicked ${count} times`);
  const [favicon, setFavicon] = React.useState(
    "https://bytes.dev/favicon/favicon-32x32.png"
  );
  useFavicon(favicon);
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  // const [index, setIndex] = React.useState(0);
  const [countv2, { increment, decrement, set, reset }] = useCounter(5, {
    min: 5,
    max: 10,
  });

  const { add, remove, clear, first, last, size, queue } = useQueue([1, 2, 3]);

  // const clear = useInterval(() => {
  //   setIndex(index + 1);
  // }, 1000);

  // const handleStop = () => {
  //   clear();
  // };

  const handleClick = () => {
    function getNewColor() {
      const newColor = getRandomColor();
      if (color === newColor) {
        getNewColor();
      } else {
        setColor(newColor);
      }
    }
    getNewColor();
  };

  function getRandomColor() {
    const colors = ["green", "blue", "purple", "red", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h3>useDocumentTitle</h3>
      <p>Clicked {count} times.</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <hr />
      <h3>useDefault</h3>
      <p
        onClick={() => {
          setName({ name: "Ionutze" });
        }}
        style={{ textDecoration: "underline" }}
      >
        Ionute
      </p>
      <p
        onClick={() => {
          setName();
        }}
        style={{ textDecoration: "underline" }}
      >
        Null
      </p>
      <code>{JSON.stringify(name)}</code>
      <hr />
      <h3>useToggle</h3>
      <p
        onClick={() => {
          setToggle(true);
        }}
      >
        Turn ON
      </p>
      <p
        onClick={() => {
          setToggle(false);
        }}
      >
        Turn Off
      </p>
      <p
        onClick={() => {
          setToggle("asd");
        }}
      >
        Toggle bothways
      </p>
      <input
        onChange={toggle}
        className="toggle-checkbox"
        type="checkbox"
        checked={toggle}
      />
      <hr />
      <h3>usePrevious</h3>
      <button className="link" onClick={handleClick}>
        Next
      </button>
      <p>color was {JSON.stringify(previousColor)}</p>
      <p>color is {color}</p>
      <hr />
      <button
        onClick={() =>
          setFavicon("https://reactnewsletter.com/favicon/favicon-32x32.png")
        }
      >
        Set favicon
      </button>
      <hr />
      <h3>use Copy to clipboard</h3>
      <button onClick={() => copyToClipboard("test")}>Copy to clipboard</button>
      <p>Copied text is {copiedText}</p>
      <hr />
      {/*
      <h3>use Interval</h3>
      <span>Index is {index}</span>
      <button onClick={handleStop}>Stop</button>
      */}
      <hr />
      <h3>UseCounter</h3>
      <h6>with optional min / max</h6>
      <button disabled={countv2 >= 10} className="link" onClick={increment}>
        Increment
      </button>
      <button disabled={countv2 <= 5} className="link" onClick={decrement}>
        Decrement
      </button>
      <button className="link" onClick={() => set(7)}>
        Set to 7
      </button>
      <button className="link" onClick={reset}>
        Reset
      </button>
      <p>{countv2}</p>

      <hr />
      <h3>Use lock body scroll</h3>

      <hr />
      <h3>Use queue</h3>
      <header>
        <h1>UseQueue</h1>
        <button className="link" onClick={() => add((last || 0) + 1)}>
          Add
        </button>
        <button disabled={size === 0} className="link" onClick={remove}>
          Remove
        </button>
        <button disabled={size === 0} className="link" onClick={clear}>
          Clear
        </button>
      </header>
      <QueueDemo queue={queue} size={size} first={first} last={last} />
    </div>
  );
}

export default App;
