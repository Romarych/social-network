import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    // test("Status from props should be in the state", () => {
    //     const component = create(<ProfileStatus status="ddd" />)
    //     const root = component.root
    //     expect(root.state.status).toBe("ddd")
    // });

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

    // test("Callback should be called", () => {
    //     const mockCallback = jest.fn()
    //     const component = create(<ProfileStatus status="ddd" updateStatus={mockCallback} />)
    //     const instance = component.getInstance()
    //     instance.deactivateEditMode()
    //     expect(mockCallback.mock.calls.length).toBe(1)
    // }) 
 
    // test("Input should be displayed in editMode instead of span", () => {
    //     const component = create(<ProfileStatus status="ddd" />)
    //     const root = component.root
    //     const span = root.findByType("span")
    //     span.props.onDoubleClick()
    //     const input = root.findByType("input")
    //     expect(input.props.value).toBe("ddd")
    // })

    // test("After creation <span> should be dispayed with correct status", () => {
    //     const component = create(<ProfileStatus status="ddd" />)
    //     const root = component.root
    //     const span = root.findByType("span")
    //     expect(span.innerText).toBe("ddd")
    // })
})