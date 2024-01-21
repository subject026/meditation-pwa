import { describe, expect, it } from "vitest";
import { parseTime } from "./parseTime";

const fourHours = 60 * 60 * 4;
const tenMinutes = 60 * 10;
const fortyTwoSeconds = 42;

describe("parseTime", () => {
  it("should return correct numbers of hours, minutes and seconds", () => {
    {
      const { hours, minutes, seconds } = parseTime(
        fourHours + tenMinutes + fortyTwoSeconds
      );
      expect(hours).toBe(4);
      expect(minutes).toBe(10);
      expect(seconds).toBe(42);
    }
    {
      const { hours, minutes, seconds } = parseTime(fourHours);

      expect(hours).toBe(4);
      expect(minutes).toBe(0);
      expect(seconds).toBe(0);
    }

    {
      const { hours, minutes, seconds } = parseTime(
        tenMinutes + fortyTwoSeconds
      );
      expect(hours).toBe(0);
      expect(minutes).toBe(10);
      expect(seconds).toBe(42);
    }

    {
      const { hours, minutes, seconds } = parseTime(fortyTwoSeconds);

      expect(hours).toBe(0);
      expect(minutes).toBe(0);
      expect(seconds).toBe(42);
    }
  });
});
