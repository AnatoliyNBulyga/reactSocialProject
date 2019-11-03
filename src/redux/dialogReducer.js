const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogReducer = (state, action) => {

    switch (action.type) {

        case ADD_MESSAGE :
            let newMessage = {
                id: 4,
                text: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_MESSAGE :

            state.newMessageText = action.newMessageText;
            return state;
            
        default:
            return state;
    }

};

export const addMessageActionCreator = () => ({ type:ADD_MESSAGE });
export const updateMessageActionCreator = (text) =>
    ({type: UPDATE_MESSAGE, newMessageText: text});

export default dialogReducer;
