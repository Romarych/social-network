import React, {FC, useState} from "react";
import s from "./Pagination.module.css";

type PropsType = {
    currentPage: number
    onPageChanged?: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    portionSize?: number
}

const Pagination: FC<PropsType> = ({currentPage, onPageChanged = x => x, totalItemsCount, pageSize, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const prev = "< Prev"
    const next = "Next >"
    
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)

    // let [portionNumber, setPortionNumber] = useState<number | null>(null) // если useState === null
    // if (portionNumber === null) portionNumber = 1

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {/* {pages.filter(p => p <= currentPage + 5 && p >= currentPage - 5).map((p) => {
                return <span  className={`${currentPage === p && s.selectedPage } ${s.page}`}
                key={p} onClick={(e) => {onPageChanged(p)}}>{p}</span>
            })} */}

            {portionNumber > 1 && <button className={s.btn} onClick={ () => {setPortionNumber(portionNumber - 1)}}>{prev}</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
               return <span  className={`${currentPage === p && s.selectedPage } ${s.page}`}
               key={p} onClick={(e) => {onPageChanged(p)}}>{p}</span>
            })}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>{next}</button>}
        </div>
    )
}
export default Pagination;