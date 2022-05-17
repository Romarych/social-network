import React from "react";
import { create } from "react-test-renderer";
import Pagination from "./Pagination";

describe("Paginator component tests", () => {
    // test("Pages count is 11 but should be showed only 10", () => {
    //     const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10}/>)
    //     const root = component.root
    //     const spans = root.findAllByType("span")
    //     expect(spans.length).toBe(10)
    // })

    test("Pages count is 11 but should be showed only 10", () => {
        const component = create(<Pagination totalItemsCount={12} pageSize={1} currentPage={1} />)
        const root = component.root
        const spans = root.findAllByType("span")  
        expect(spans.length).toBe(11)    
    })

    // test("If pages count is more then 10 button Next should be showed be present", () => {
    //     const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10}/>)
    //     const root = component.root
    //     const button = root.findAllByType("button")
    //     expect(button.length).toBe(1)
    // })
})