import { useState } from "react";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { useDefault } from "./hooks/useDefault";
import { useToggle } from "./hooks/useToggle";
import { usePrevious } from "./hooks/usePrevious";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const initialValue = { name: "Ionut" };
  const defaultValue = { name: "Este valoare nula" };
  const [name, setName] = useDefault(initialValue, defaultValue);
  const [toggle, setToggle] = useToggle(false);
  console.log({ toggle });
  const [color, setColor] = React.useState(getRandomColor());
  const previousColor = usePrevious(color);
  useDocumentTitle(`Clicked ${count} times`);

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
    </div>
  );
}

export default App;
