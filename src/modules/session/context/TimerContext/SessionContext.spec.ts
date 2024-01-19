import { describe, expect, test, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { SessionProvider, useSession } from "./SessionContext";

vi.useFakeTimers();

describe("useTimer hook", () => {
  test("timer initializes successfully", () => {
    const { result } = renderHook(() => useSession(), {
      wrapper: SessionProvider,
    });

    expect(result.current.sessionState.status).toBe("INIT");
  });

  test("can start timer", () => {
    const { result } = renderHook(() => useSession(), {
      wrapper: SessionProvider,
    });

    const startTime = new Date();
    act(() => {
      result.current.startSession({
        targetMinutes: 10,
        startTime,
      });
    });

    expect(result.current.sessionState).toStrictEqual({
      status: "RUNNING",
      targetSeconds: 600,
      secondsPassed: 0,
      startTime,
    });
  });

  // test("can stop timer", () => {
  //   const { result } = renderHook(() => useTimer());
  //   act(() => {
  //     result.current.startTimer();
  //   });
  //   expect(result.current.timerStatus).toBe("RUNNING");

  //   act(() => {
  //     result.current.stopTimer();
  //   });

  //   expect(result.current.timerStatus).toBe("STOPPED");
  // });

  // test("running timer increments seconds", () => {
  //   const { result } = renderHook(() => useTimer());
  //   act(() => {
  //     result.current.startTimer();
  //   });
  //   expect(result.current.timerStatus).toBe("RUNNING");

  //   // 1005ms later
  //   for (let i = 0; i < 200; i++) {
  //     act(() => {
  //       vi.advanceTimersByTime(5);
  //     });
  //   }

  //   expect(result.current.secondsCount).toBe(1);

  //   // 4005ms later
  //   for (let i = 0; i < 200 * 4 + 5; i++) {
  //     act(() => {
  //       vi.advanceTimersByTime(5);
  //     });
  //   }

  //   expect(result.current.secondsCount).toBe(5);

  //   // 1_0005ms later
  //   for (let i = 0; i < 200 * 10 + 5; i++) {
  //     act(() => {
  //       vi.advanceTimersByTime(5);
  //     });
  //   }

  //   expect(result.current.secondsCount).toBe(15);
  // });

  // test("can reset timer", () => {
  //   const { result } = renderHook(() => useTimer());
  //   act(() => {
  //     result.current.startTimer();
  //   });

  //   expect(result.current.timerStatus).toBe("RUNNING");

  //   for (let i = 0; i < 201 * 10; i++) {
  //     act(() => {
  //       vi.advanceTimersByTime(5);
  //     });
  //   }

  //   expect(result.current.secondsCount).toBe(10);

  //   act(() => {
  //     result.current.resetTimer();
  //   });

  //   expect(result.current.timerStatus).toBe("INIT");
  //   expect(result.current.secondsCount).toBe(0);
  // });
});
