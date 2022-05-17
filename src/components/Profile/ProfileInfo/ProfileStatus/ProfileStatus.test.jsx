import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test("After creation <span> should be dispayed with correct status", () => {
        const component = create(<ProfileStatus status="ddd" />)
        const root = component.root
        const span = root.findByType("span")
        expect(span).not.toBeNull()
    })

    test("After creation <input> should not be dispayed with correct status", () => {
        const component = create(<ProfileStatus status="ddd" />)
        const root = component.root
        expect(() => {
            const input = root.findByType("input")
        }).toThrow()
    })

    test("After creation <span> should be dispayed with correct status", () => {
        const component = create(<ProfileStatus status="ddd" />)
        const root = component.root
        const span = root.findByType("span")
        expect(span.children[0]).toBe("ddd")
    })
})