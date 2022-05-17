import React, { Suspense, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reduser";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsConainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

const App = (props) => {  
  useEffect(() => {
    props.initializeApp()
  }, [props.store])

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar store={props.store} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/*" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs" element={<Suspense fallback={<Preloader />}><DialogsConainer /></Suspense>} />
          <Route path="/users" element={<Suspense><UsersContainer /></Suspense>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}



const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SociallApp = (props) => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer store={store} />
        </Provider>
    </BrowserRouter>
)

export default SociallApp
