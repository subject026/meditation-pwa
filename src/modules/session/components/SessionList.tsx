import { db } from "@/modules/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import { Button } from "@/modules/core/components/Layout/Button";
import { parseTime } from "../utils/parseTime/parseTime";
import { addLeadingZero } from "../utils/addLeadingZero";

export function SessionList() {
  const sessions = useLiveQuery(() => db.session.toArray());

  const totalSeconds = sessions?.reduce(
    (acc, session) => (acc += session.length),
    0
  );

  return (
    <div className="p-4 border-2 border-neutral-400 rounded">
      <div className="flex gap-4 items-center pb-8">
        <h2 className=" text-lg font-bold">Completed Sessions</h2>
        <Button onPress={() => db.session.clear()}>clear</Button>
      </div>
      <ul className="flex flex-col gap-2">
        {sessions?.map((session) => {
          const { hours, minutes, seconds } = parseTime(session.length);
          return (
            <li
              key={session.id}
              className="p-2 rounded bg-neutral-300 flex justify-end"
            >
              <span>
                {hours > 0 && hours + ":"}
                {addLeadingZero(minutes)}:{addLeadingZero(seconds)}
              </span>
            </li>
          );
        })}
      </ul>
      <TotalTime totalSeconds={totalSeconds || 0} />
    </div>
  );
}

function TotalTime({ totalSeconds }: { totalSeconds: number }) {
  const { hours, minutes, seconds } = parseTime(totalSeconds);
  return (
    <div className="pt-6">
      <div className="flex justify-between p-2">
        <span className="font-bold text-lg">total time</span>
        <span>
          {hours > 0 && hours + ":"}
          {addLeadingZero(minutes)}:{addLeadingZero(seconds)}
        </span>
      </div>
      <div className="text-sm italic text-neutral-500 flex justify-end">
        <span>{`${hours} hours ` + `${minutes} minutes`}</span>
      </div>
    </div>
  );
}
