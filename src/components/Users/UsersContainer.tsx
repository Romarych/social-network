import React, { FC, useEffect } from "react";
import { connect } from "react-redux"
import { getUsers, follow, unfollow } from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getUsersData, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors"
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsTypes = {
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    pageSize: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropsTypes = {    
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type PropsTypes = MapStatePropsTypes & MapDispatchPropsTypes 

const UsersContainer: FC<PropsTypes> = ({currentPage, pageSize, getUsers, isFetching, ...props}) => {
    useEffect( () => {
        getUsers(currentPage, pageSize)
    }, [currentPage, pageSize, getUsers])

    const onPageChanged = (currentPage: number) => {
        getUsers(currentPage, pageSize)
    }

    return (
        <>
            {isFetching ? <Preloader /> : null}
            <Users {...props} onPageChanged={onPageChanged} currentPage={currentPage} pageSize={pageSize}/>
        </>
    )

}

let mapStateToProps = (state: AppStateType): MapStatePropsTypes => {
    return {
        users: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {} State = DefaultState
    connect<MapStatePropsTypes, MapDispatchPropsTypes, {}, AppStateType>(mapStateToProps, {getUsers, follow, unfollow}),
)(UsersContainer)




