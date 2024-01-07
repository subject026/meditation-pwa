import { useEffect, useState } from "react";

export type TTimerStatus = "INIT" | "RUNNING" | "STOPPED";

export function useTimer() {
  const [timerStatus, setTimerStatus] = useState<TTimerStatus>("INIT");
  const [secondsCount, setSecondsCount] = useState(0);
  const [timeLastTick, setTimeLastTick] = useState<null | number>(null);

  useEffect(() => {
    setTimeLastTick(Date.now());
    const tickInterval = setInterval(() => {
      if (timerStatus === "RUNNING") {
        const timeNow = Date.now();
        if (!timeLastTick) throw new Error("timeLastTick not set!");
        const difference = timeNow - timeLastTick;
        if (difference > 1000) {
          const drift = difference - 1000;
          setSecondsCount(secondsCount + 1);
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
    secondsCount,
    setSecondsCount,
  ]);

  function startTimer() {
    setTimerStatus("RUNNING");
  }

  function stopTimer() {
    setTimeLastTick(0);
    setTimerStatus("STOPPED");
  }

  function resetTimer() {
    setTimeLastTick(null);
    setSecondsCount(0);
    setTimerStatus("INIT");
  }

  return {
    timerStatus,
    secondsCount,
    startTimer,
    stopTimer,
    resetTimer,
  };
}
