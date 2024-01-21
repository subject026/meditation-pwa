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
  const { saveSession, resetSession } = useSession();

  return (
    <div className="w-full flex flex-col gap-6 items-center">
      <TimerDisplay
        secondsPassed={secondsPassed}
        targetSeconds={targetSeconds}
      />
      <div className="w-48 flex flex-col gap-2">
        <Button fullWidth={true} onPress={saveSession}>
          Save Session
        </Button>
        <Button fullWidth={true} onPress={resetSession}>
          Discard Session
        </Button>
      </div>
    </div>
  );
}
