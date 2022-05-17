import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


let mapStateToPropsNavigate = (state) => ({
    isAuth: state.auth.isAuth
})

export const WithAuthNavigate = (Component) => {
    let NavigateComponent = (props) => {
        if (!props.isAuth) return <Navigate to={"/login"} />
        return <Component {...props} />
    }
    let ConnectedAuthNavigateComponent = connect(mapStateToPropsNavigate)(NavigateComponent)

    return ConnectedAuthNavigateComponent
}
