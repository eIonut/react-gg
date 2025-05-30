import * as React from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

const useEventListener = (target, eventName, handler, options) => {
  const onEvent = useEffectEvent(handler);

  React.useEffect(() => {
    const targetElement = target.current ?? target;

    if (!targetElement?.addEventListener) return;

    targetElement.addEventListener(eventName, onEvent, options); // we should let the user memoize options now because they can use different options,
    //  for the handler it was not the case because its only a function

    return () => {
      targetElement.removeEventListener(eventName, onEvent);
    };
  }, [target, eventName, options]);
};

export default useEventListener;
