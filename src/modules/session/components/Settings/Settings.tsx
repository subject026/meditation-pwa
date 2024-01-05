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
      className="flex gap-4"
    >
      <Label>Duration</Label>
      <Group className="flex gap-2">
        <Input className="text-3xl font-bold bg-transparent" />
        <div className="grid grid-cols-2 gap-2">
          <Button
            className={
              "bg-red-500 text-neutral-300 font-bold text-xl px-4 py-2"
            }
            slot="decrement"
          >
            -
          </Button>
          <Button
            className={"bg-red-500 text-neutral-300 font-bold text-lg p-4"}
            slot="increment"
          >
            +
          </Button>
        </div>
      </Group>
    </NumberField>
  );
}
