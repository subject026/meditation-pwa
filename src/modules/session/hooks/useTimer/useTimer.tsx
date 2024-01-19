import { useEffect, useState } from "react";

export type TTimerStatus = "INIT" | "RUNNING" | "STOPPED";

export function useTimer() {
  const [timerStatus, setTimerStatus] = useState<TTimerStatus>("INIT");
  const [secondsPassed, setSecondsPassed] = useState(0);
  const [timeLastTick, setTimeLastTick] = useState<null | number>(null);

  useEffect(() => {
    const tickInterval = setInterval(() => {
      if (timerStatus === "RUNNING") {
        const timeNow = Date.now();
        if (!timeLastTick) throw new Error("timeLastTick not set!");
        const difference = timeNow - timeLastTick;
        if (difference >= 1000) {
          const drift = difference - 1000;
          setSecondsPassed((secondsPassed) => {
            return secondsPassed + 1;
          });
          setTimeLastTick(timeNow - drift);
        }
      }
    }, 5);

    return () => {
      clearInterval(tickInterval);
    };
  }, [
    timerStatus,
    timeLastTick,
    setTimeLastTick,
    secondsPassed,
    setSecondsPassed,
  ]);

  function startTimer() {
    setTimeLastTick(Date.now());
    setTimerStatus("RUNNING");
  }

  function stopTimer() {
    setTimeLastTick(0);
    setTimerStatus("STOPPED");
  }

  function resetTimer() {
    setTimeLastTick(null);
    setSecondsPassed(0);
    setTimerStatus("INIT");
  }

  return {
    timerStatus,
    secondsPassed,
    startTimer,
    stopTimer,
    resetTimer,
  };
}
