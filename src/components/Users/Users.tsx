import React, { FC } from "react";
import Pagination from "../common/Paginator/Pagination";
import User from "./User/User";
import {UserType} from "../../types/types"

type PropTypes = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users: FC<PropTypes> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, followingInProgress, unfollow, follow }) => {
    return (
        <div >
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
            {users.map(user => <User key={user.id} user={user} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} />)}
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
        </div>
    )
}

export default Users;