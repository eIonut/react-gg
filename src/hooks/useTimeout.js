import React, { useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

const useTimeout = (cb, ms) => {
  const timeoutId = React.useRef(null);
  const onTimeout = useEffectEvent(cb);

  const handleClearTimeout = React.useCallback(() => {
    window.clearTimeout(timeoutId.current);
  }, [timeoutId]);

  useEffect(() => {
    timeoutId.current = window.setTimeout(onTimeout, ms);
    return handleClearTimeout;
  }, [ms, handleClearTimeout]);

  return handleClearTimeout;
};

export { useTimeout };
