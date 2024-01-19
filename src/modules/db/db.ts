// db.ts
import Dexie, { Table } from "dexie";

export interface Settings {
  focusSessionMinutes: number;
}

// const initialSettings: Setting[] = [{ key: "focusSessionMinutes", value: 10 }];

export interface Session {
  id: string;
  startTime: Date;
  endTime: Date;
  length: number;
}

export class HabitCacheDb extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  settings!: Table<Settings>;
  session!: Table<Session>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      settings: "id, focusSessionMinutes",
      session: "id, title, startTime, endTime, length",
    });

    this.on("populate", function (transaction) {
      transaction
        .table("settings")
        .add({ id: "APP_SETTINGS", focusSessionMinutes: 20 });
    });
  }
}

export const db = new HabitCacheDb();
