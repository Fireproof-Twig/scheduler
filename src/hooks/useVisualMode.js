import React, { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace = false) {
    setHistory((prev) => {
      if (replace === false) return [...prev, newMode];
      else {
        return [...prev.slice(0, prev.length - 1), newMode];
      }
    });
    setMode(() => {
      return newMode;
    });
  }

  function back() {
    if (history.length > 1) {
      setMode(() => {
        history.pop();
        return history[history.length - 1];
      });
    }
  }
  return {
    mode,
    transition,
    back,
  };
}
