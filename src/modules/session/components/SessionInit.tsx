import { NumberField, Label, Group, Input } from "react-aria-components";
import { useSession } from "../context/TimerContext/SessionContext";
import { Button } from "@/modules/core/components/Layout/Button";
import { db } from "@/modules/db/db";
import { useLiveQuery } from "dexie-react-hooks";
export function SessionInit() {
  const settings = useLiveQuery(() => db.settings.get("APP_SETTINGS"));

  const { startSession } = useSession();

  function handleSessionTargetChange(value: number) {
    db.settings
      .update("APP_SETTINGS", { focusSessionMinutes: value })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <section className="grow flex flex-col gap-4 items-center">
      {settings && (
        <>
          <NumberField
            defaultValue={settings.focusSessionMinutes}
            minValue={0}
            onChange={handleSessionTargetChange}
            className="flex flex-col gap-4"
          >
            <Label>Duration</Label>
            <Group className="flex gap-2">
              <Input className="p-2 border-2 border-neutral-400 rounded max-w-52 text-3xl font-bold bg-transparent" />
            </Group>
          </NumberField>

          <Button
            onPress={() => {
              startSession({
                targetMinutes: settings.focusSessionMinutes,
                startTime: new Date(),
              });
            }}
          >
            start timer
          </Button>
        </>
      )}
    </section>
  );
}
