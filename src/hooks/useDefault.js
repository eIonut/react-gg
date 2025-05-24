import React from "react";

const useDefault = (initialValue, defaultValue) => {
  const [state, setState] = React.useState(initialValue);

  if (state === null || state === undefined) {
    return [defaultValue, setState];
  }

  return [state, setState];
};

export { useDefault };
