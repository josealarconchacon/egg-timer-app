import { EGG_TYPES, EGG_SIZES, AUDIO_NOTIFICATION_URL } from "../constants";

describe("constants.ts tests", () => {
  describe("EGG_TYPES", () => {
    test("has 4 items", () => {
      expect(EGG_TYPES.length).toBe(4);
    });

    test("each item has required EggType fields", () => {
      EGG_TYPES.forEach((egg) => {
        expect(typeof egg.id).toBe("string");
        expect(typeof egg.name).toBe("string");
        expect(typeof egg.time).toBe("number");
        expect(typeof egg.emoji).toBe("string");
        expect(typeof egg.description).toBe("string");
      });
    });

    test("specific egg types have correct values", () => {
      const soft = EGG_TYPES.find((e) => e.id === "soft");
      const medium = EGG_TYPES.find((e) => e.id === "medium");
      const hard = EGG_TYPES.find((e) => e.id === "hard");
      const custom = EGG_TYPES.find((e) => e.id === "custom");

      expect(soft).toMatchObject({ name: "Liquid", time: 179 });
      expect(medium).toMatchObject({ name: "Soft", time: 218 });
      expect(hard).toMatchObject({ name: "Hard", time: 304 });
      expect(custom).toMatchObject({ time: 0, description: "Set time" });
    });

    test("snapshot test for regression protection", () => {
      expect(EGG_TYPES).toMatchSnapshot();
    });
  });

  describe("EGG_SIZES", () => {
    test("has 4 items", () => {
      expect(EGG_SIZES.length).toBe(4);
    });

    test("each item has required EggSize fields", () => {
      EGG_SIZES.forEach((size) => {
        expect(typeof size.id).toBe("string");
        expect(typeof size.name).toBe("string");
        expect(typeof size.diameter).toBe("string");
        expect(typeof size.weight).toBe("string");
        expect(typeof size.timeMultiplier).toBe("number");
        expect(typeof size.emoji).toBe("string");
      });
    });

    test("validate time multipliers", () => {
      expect(EGG_SIZES.find((s) => s.id === "small")?.timeMultiplier).toBe(
        0.85
      );
      expect(EGG_SIZES.find((s) => s.id === "medium")?.timeMultiplier).toBe(
        1.0
      );
      expect(EGG_SIZES.find((s) => s.id === "large")?.timeMultiplier).toBe(
        1.15
      );
      expect(EGG_SIZES.find((s) => s.id === "xlarge")?.timeMultiplier).toBe(
        1.3
      );
    });

    test("snapshot for EGG_SIZES", () => {
      expect(EGG_SIZES).toMatchSnapshot();
    });
  });

  describe("AUDIO_NOTIFICATION_URL", () => {
    test("is a string", () => {
      expect(typeof AUDIO_NOTIFICATION_URL).toBe("string");
    });

    test("matches expected audio file path", () => {
      expect(AUDIO_NOTIFICATION_URL).toBe(
        "/sounds/mixkit-vintage-telephone-ringtone-1356.wav"
      );
    });
  });
});
