import React from "react";

const useToggle = (initialValue) => {
  const [on, setOn] = React.useState(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    }

    return Boolean(initialValue);
  });

  const handleToggle = React.useCallback((value) => {
    if (typeof value === "boolean") {
      return setOn(value);
    }

    return setOn((currentState) => !currentState);
  }, []);

  return [on, handleToggle];
};

export { useToggle };
