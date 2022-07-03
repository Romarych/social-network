import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";


let mapStateToPropsNavigate = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

// type MapPropsType = ReturnType<typeof mapStateToPropsNavigate> 

type MapStatePropsType = {
    isAuth: boolean
}

export function WithAuthNavigate<WCP> (WrappedComponent: React.ComponentType<WCP>) {

    const NavigateComponent: FC<MapStatePropsType> = (props) => {
        let {isAuth, ...restProps} = props
        
        if (!isAuth) return <Navigate to={"/login"} />
        return <WrappedComponent {...restProps as WCP} />
    }
    let ConnectedAuthNavigateComponent = connect<MapStatePropsType, {}, WCP, AppStateType>(mapStateToPropsNavigate)(NavigateComponent)

    return ConnectedAuthNavigateComponent
}
