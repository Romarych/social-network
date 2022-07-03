import Dialogs from "./Dialogs";
import { actions } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { compose } from "redux";
import { WithAuthNavigate } from "../../hoc/WithAuthNavigate";

export default compose<React.ComponentType>( 
    connect((state: AppStateType) => ({...state.dialogsPage}), { ...actions }),
    WithAuthNavigate
    )(Dialogs) //as React.ComponentType;