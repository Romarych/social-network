import React, {FC, Suspense, useEffect} from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import {HashRouter, Navigate, Route, Routes} from "react-router-dom"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import {connect, Provider} from "react-redux"
import {initializeApp} from "./redux/app-reduser"
import Preloader from "./components/common/Preloader/Preloader"
import store, { AppStateType } from "./redux/redux-store"

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))

type PropsType = { // type PropsType = ReturnType<typeof mapStateToProps> // можно так
    initializeApp: () => void
    initialized: boolean
}

const App: FC<PropsType> = (props) => {
    const catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        // alert("Some error occured")
    }
    useEffect(() => {
        props.initializeApp()
            window.addEventListener("unhandledrejection", catchAllUnhandledErrors)
        return () => window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
    }, [])

    if (!props.initialized) {
        return <Preloader/>
    }

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Navigate to={"/profile"}/>}/>
                    <Route path="/profile" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/dialogs" element={<Suspense fallback={<Preloader/>}><DialogsContainer/></Suspense>}/>
                    <Route path="/users" element={<Suspense><UsersContainer /></Suspense>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
                </Routes>
            </div>
        </div>
    )
}


const AppContainer = connect((state: AppStateType) => ({initialized: state.app.initialized}), {initializeApp})(App);

const SocialApp = () => (
    <HashRouter>
        <Provider store={store}>
            <AppContainer store={store}/>
        </Provider>
    </HashRouter>
)

export default SocialApp
