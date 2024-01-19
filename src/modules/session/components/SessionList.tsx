import { db } from "@/modules/db/db";
import { useLiveQuery } from "dexie-react-hooks";
import { differenceInMinutes, differenceInSeconds } from "date-fns";
import { Button } from "@/modules/core/components/Layout/Button";

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
        {sessions?.map((session) => (
          <li key={session.id} className="p-2 rounded bg-neutral-300">
            <span>
              {differenceInMinutes(session.endTime, session.startTime)}:
              {differenceInSeconds(session.endTime, session.startTime) % 60}
            </span>
          </li>
        ))}
      </ul>
      <TotalTime seconds={totalSeconds || 0} />
    </div>
  );
}

function addLeadingZero(num: number) {
  return num < 10 ? `0${num}` : num.toString();
}

function TotalTime({ seconds }: { seconds: number }) {
  const hours = Math.floor(seconds / 360);
  const minutes = Math.floor(seconds / 60);
  return (
    <div className="pt-6">
      <div className="flex justify-between">
        <span className="font-bold text-lg">total time</span>
        <span>
          {addLeadingZero(hours)}:{addLeadingZero(minutes)}
        </span>
      </div>
    </div>
  );
}
