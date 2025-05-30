import { useState, useEffect, useRef } from "react";

const useContinuousRetry = (
  callback,
  interval = 100,
  options = { maxRetries: 3 }
) => {
  const [resolved, setResolved] = useState(false);
  const retryCount = useRef(0);
  const intervalId = useRef(null);
  //useEffect event for callback

  useEffect(() => {
    if (resolved) return;

    intervalId.current = setInterval(async () => {
      const result = await callback();

      if (result) {
        setResolved(true);
        clearInterval(intervalId.current);
        return;
      }

      retryCount.current += 1;
      if (retryCount.current >= options.maxRetries) {
        clearInterval(intervalId.current);
      }
    }, interval);

    return () => clearInterval(intervalId.current);
  }, [callback, interval, options.maxRetries, resolved]);

  return resolved;
};

export { useContinuousRetry };
