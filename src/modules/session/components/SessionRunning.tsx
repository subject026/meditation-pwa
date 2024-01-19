import { Button } from "@/modules/core/components/Layout/Button";
import { TimerDisplay } from "./TimerDisplay";
import { useSession } from "../context/TimerContext/SessionContext";

export function SessionRunning({
  secondsPassed,
  targetSeconds,
}: {
  secondsPassed: number;
  targetSeconds: number;
}) {
  const { saveSession } = useSession();
  return (
    <>
      <TimerDisplay
        secondsPassed={secondsPassed}
        targetSeconds={targetSeconds}
      />
      <Button onPress={saveSession}>Save Session</Button>
    </>
  );
}
