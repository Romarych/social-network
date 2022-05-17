import React from "react";
import Pagination from "../common/Paginator/Pagination";
import User from "./User/User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div >
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
            {users.map(user => <User key={user.id} user={user} {...props} />)}
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />

        </div>
    )
}

export default Users;