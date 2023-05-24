import { classNames } from "./classNames";

describe("classNames", () => {
    test("classClass", () => {
        const expected = "classClass";
        expect(classNames("classClass")).toBe(expected);
    });

    test("with additional class", () => {
        const expected = "classClass class1 class2";
        expect(classNames(
            "classClass",
            {},
            ["class1", "class2"],
        )).toBe(expected);
    });

    test("with mods", () => {
        const expected = "classClass class1 class2 hovered scroll";
        expect(classNames(
            "classClass",
            { hovered: true, scroll: true },
            ["class1", "class2"],
        )).toBe(expected);
    });

    test("with mods false", () => {
        const expected = "classClass class1 class2 hovered";
        expect(classNames(
            "classClass",
            { hovered: true, scroll: false },
            ["class1", "class2"],
        )).toBe(expected);
    });

    test("with mods undefined", () => {
        const expected = "classClass class1 class2 hovered";
        expect(classNames(
            "classClass",
            { hovered: true, scroll: undefined },
            ["class1", "class2"],
        )).toBe(expected);
    });
});
