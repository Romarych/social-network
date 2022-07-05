import Dialogs from "./Dialogs";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { WithAuthNavigate } from "../../hoc/WithAuthNavigate";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {dispatch(sendMessageCreator(newMessageText))},
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //WithAuthNavigate
)(Dialogs);