import React from "react";

const subscribe = (callback) => {
  document.addEventListener("visibilitychange", callback);

  return () => {
    document.removeEventListener("visibilitychange", callback);
  };
};

const getServerSnapshot = () => {
  throw Error("useVisibilityChange is a client-only hook");
};

const getSnapshot = () => {
  return document.visibilityState;
};

const useVisibilityChange = () => {
  const documentVisible = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  return documentVisible === "visible";
};

export { useVisibilityChange };
