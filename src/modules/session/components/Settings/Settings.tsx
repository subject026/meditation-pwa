import { useState } from "react";
import {
  NumberField,
  Label,
  Group,
  Input,
  Button,
} from "react-aria-components";
export function Settings() {
  const [sessionLength, setSessionLength] = useState(0);
  return (
    <NumberField
      defaultValue={sessionLength}
      minValue={0}
      onChange={setSessionLength}
      className="flex flex-col gap-4"
    >
      <Label>Duration</Label>
      <Group className="flex gap-2">
        <Input className="max-w-52 text-3xl font-bold bg-transparent" />
        <div className="flex flex-col gap-2">
          <Button
            className={
              "px-4 py-2 rounded bg-red-500 text-neutral-300 font-bold text-lg"
            }
            slot="increment"
          >
            +
          </Button>
          <Button
            className={
              "px-4 py-2 rounded bg-red-500 text-neutral-300 font-bold text-xl"
            }
            slot="decrement"
          >
            -
          </Button>
        </div>
      </Group>
    </NumberField>
  );
}
