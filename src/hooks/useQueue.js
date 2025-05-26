import * as React from "react";

const useQueue = (initialValue = []) => {
  const [queue, setQueue] = React.useState(initialValue);

  const add = React.useCallback((item) => {
    setQueue((queue) => [...queue, item]);
  }, []);

  const remove = React.useCallback(() => {
    let removedElement;
    setQueue(([firstElement, ...q]) => {
      removedElement = firstElement;
      return q;
    });
    return removedElement;
  }, []);

  const clear = React.useCallback(() => {
    setQueue([]);
  }, []);

  return {
    add,
    remove,
    clear,
    first: queue[0],
    last: queue[queue.length - 1],
    size: queue.length,
    queue,
  };
};

export { useQueue };
