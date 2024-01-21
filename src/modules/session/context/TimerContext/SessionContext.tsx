import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useTimer } from "../../hooks/useTimer/useTimer";
import { nanoid } from "nanoid";
import { db } from "@/modules/db/db";
import { differenceInSeconds } from "date-fns";

export type SessionInitState = {
  status: "INIT";
};

export type SessionRunningState = {
  status: "RUNNING";
  startTime: Date;
  targetSeconds: number;
  secondsPassed: number;
};

export type SessionState = SessionInitState | SessionRunningState;

const SessionContext = createContext<
  | {
      startSession: ({
        targetMinutes,
        startTime,
      }: {
        targetMinutes: number;
        startTime: Date;
      }) => void;
      saveSession: () => void;
      resetSession: () => void;
      sessionState: SessionState;
    }
  | undefined
>(undefined);

const initialState: SessionInitState = {
  status: "INIT",
};

export function SessionProvider({ children }: { children: ReactNode }) {
  const [sessionState, setSessionState] = useState<SessionState>(initialState);

  const { timerStatus, secondsPassed, startTimer, stopTimer, resetTimer } =
    useTimer();

  function startSession({
    targetMinutes,
    startTime,
  }: {
    targetMinutes: number;
    startTime: Date;
  }) {
    setSessionState({
      status: "RUNNING",
      startTime,
      targetSeconds: targetMinutes * 60,
      secondsPassed: secondsPassed,
    });
    startTimer();
  }

  useEffect(() => {
    if (timerStatus !== "RUNNING") return;
    setSessionState((state) => ({
      ...state,
      secondsPassed,
    }));
  }, [secondsPassed, timerStatus]);

  function resetSession() {
    setSessionState(initialState);
    stopTimer();
    resetTimer();
  }

  function saveSession() {
    if (sessionState.status === "INIT") {
      throw new Error('can\'t save session with status "INIT"');
    }

    const endTime = new Date();
    db.session.add({
      id: nanoid(),
      startTime: sessionState.startTime,
      endTime,
      length: differenceInSeconds(endTime, sessionState.startTime),
    });
    resetSession();
  }

  return (
    <SessionContext.Provider
      value={{
        startSession,
        saveSession,
        resetSession,
        sessionState,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const sessionContextValue = useContext(SessionContext);

  if (!sessionContextValue)
    throw new Error(
      "useSession must be called inside a SessionContextProvider"
    );

  return sessionContextValue;
}
