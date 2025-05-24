import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "set":
      return action.set;
    case "reset":
      return action.default;
    default:
      return state;
  }
}

const useCounter = (startingNumber, { min, max }) => {
  const [state, dispatch] = React.useReducer(reducer, { startingNumber });

  if (startingNumber < min || startingNumber > max) {
    throw new Error("Start is outside the range");
  }
};

export { useCounter };
