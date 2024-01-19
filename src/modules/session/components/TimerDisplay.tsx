export function TimerDisplay({
  secondsPassed,
  targetSeconds,
}: {
  secondsPassed: number;
  targetSeconds: number;
}) {
  const seconds = secondsPassed % 60;
  const minutes = Math.floor(secondsPassed / 60);
  return (
    <div>
      <div>target: {targetSeconds}</div>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
}
