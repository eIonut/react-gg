import React from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const useRandomInterval = (cb, { minDelay, maxDelay }) => {
  const onInterval = useEffectEvent(cb);
  const timeoutId = React.useRef(null);

  const handleClearTimeout = React.useCallback(() => {
    window.clearTimeout(timeoutId.current);
  }, []);

  React.useEffect(() => {
    const tick = () => {
      const interval = getRandomNumber(minDelay, maxDelay);
      timeoutId.current = window.setTimeout(() => {
        onInterval();
        tick();
      }, interval);
    };

    tick();

    return handleClearTimeout;
  }, [minDelay, maxDelay, handleClearTimeout]);

  return handleClearTimeout;
};

export default useRandomInterval;
