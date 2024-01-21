import clsx from "clsx";
import { addLeadingZero } from "../utils/addLeadingZero";
import { parseTime } from "../utils/parseTime/parseTime";

export function TimerDisplay({
  secondsPassed,
  targetSeconds,
}: {
  secondsPassed: number;
  targetSeconds: number;
}) {
  const secondsRemaining = targetSeconds - secondsPassed;
  const targetReached = secondsRemaining < 0;

  const displaySeconds = targetReached
    ? secondsPassed - targetSeconds
    : secondsRemaining;
  const { minutes, seconds } = parseTime(displaySeconds);

  return (
    <div
      className={clsx(
        "w-full flex flex-row text-8xl font-bold tracking-wide",
        targetReached ? "text-green-700" : "text-neutral-600"
      )}
    >
      <div className="flex-1 text-right">
        {targetReached && <span className="pr-4">+</span>}

        {minutes}
      </div>
      <div className="grow-0 flex justify-center">:</div>
      <div className="flex-1">
        <span>{addLeadingZero(seconds)}</span>
      </div>
    </div>
  );
}
