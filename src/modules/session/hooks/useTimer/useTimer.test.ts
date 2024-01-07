import { describe, expect, test, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTimer } from "./useTimer";

vi.useFakeTimers();

describe("useTimer hook", () => {
  test("timer initializes successfully", () => {
    const { result } = renderHook(() => useTimer());

    expect(result.current.timerStatus).toBe("INIT");
    expect(result.current.secondsCount).toBe(0);
  });

  test("can start timer", () => {
    const { result } = renderHook(() => useTimer());

    expect(result.current.timerStatus).toBe("INIT");

    act(() => {
      result.current.startTimer();
    });

    expect(result.current.timerStatus).toBe("RUNNING");
  });

  test("can stop timer", () => {
    const { result } = renderHook(() => useTimer());
    act(() => {
      result.current.startTimer();
    });
    expect(result.current.timerStatus).toBe("RUNNING");

    act(() => {
      result.current.stopTimer();
    });

    expect(result.current.timerStatus).toBe("STOPPED");
  });

  test("running timer increments seconds", () => {
    const { result } = renderHook(() => useTimer());
    act(() => {
      result.current.startTimer();
    });
    expect(result.current.timerStatus).toBe("RUNNING");

    act(() => {
      vi.advanceTimersByTime(1005);
    });

    expect(result.current.secondsCount).toBe(1);

    act(() => {
      vi.advanceTimersByTime(1005);
    });

    expect(result.current.secondsCount).toBe(2);

    for (let i = 0; i < 10; i++) {
      act(() => {
        vi.advanceTimersByTime(1005);
      });
    }

    expect(result.current.secondsCount).toBe(12);
  });
});
