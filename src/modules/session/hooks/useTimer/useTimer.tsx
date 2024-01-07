import { useEffect, useState } from "react";

export type TTimerStatus = "INIT" | "RUNNING" | "STOPPED";

const initialTickTime = Date.now();

export function useTimer() {
  const [timerStatus, setTimerStatus] = useState<TTimerStatus>("INIT");
  const [secondsCount, setSecondsCount] = useState(0);
  const [timeLastTick, setTimeLastTick] = useState<number>(initialTickTime);

  useEffect(() => {
    const tickInterval = setInterval(() => {
      if (timerStatus === "RUNNING") {
        const timeNow = Date.now();
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
    setTimerStatus("STOPPED");
  }

  function resetTimer() {
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
