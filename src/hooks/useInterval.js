// import { experimental_useEffectEvent as useEffectEvent } from "react";

// import * as React from "react";
// function useInterval(cb, ms) {
//   const id = React.useRef(null);
//   const onInterval = useEffectEvent(cb);

//   const handleClearInterval = React.useCallback(() => {
//     window.clearInterval(id.current);
//   }, []);

//   React.useEffect(() => {
//     id.current = window.setInterval(onInterval, ms);
//     return handleClearInterval;
//   }, [ms, handleClearInterval, onInterval]);

//   return handleClearInterval;
// }

// export { useInterval };
