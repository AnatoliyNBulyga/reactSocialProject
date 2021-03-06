import {addMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
        return {
                dialogsPage: state.dialogsPage,
                messages: state.dialogsPage.messages
        }
};
const mapDispatchToProps = (dispatch) => {
        return {
                addMessage: (newMessageBody) => {
                        dispatch(addMessageActionCreator(newMessageBody));
                }
        }
}

export default compose( connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);