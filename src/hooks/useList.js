import React from "react";

const useList = (defaultList = []) => {
  const [list, setList] = React.useState(defaultList);

  const set = React.useCallback((l) => {
    setList(l);
  }, []);

  const push = React.useCallback((element) => {
    setList((l) => [...l, element]);
  }, []);

  const removeAt = React.useCallback((index) => {
    setList((l) => l.filter((_, i) => i !== index));
  }, []);

  const insertAt = React.useCallback((index, element) => {
    setList((l) => [...l.slice(0, index + 1), element, ...l.slice(index + 1)]);
  }, []);

  const updateAt = React.useCallback((index, element) => {
    setList((l) => l.map((item, i) => (i === index ? element : item)));
  }, []);

  const clear = React.useCallback(() => {
    setList([]);
  }, []);

  return [list, { set, push, removeAt, insertAt, updateAt, clear }];
};

export { useList };
