import React from "react";

const usePrevious = (newValue) => {
  const [current, setCurrent] = React.useState(newValue);
  const [previous, setPrevious] = React.useState(null);

  if (newValue !== current) {
    setPrevious(current);
    setCurrent(newValue);
  }

  return previous;
};

export { usePrevious };
