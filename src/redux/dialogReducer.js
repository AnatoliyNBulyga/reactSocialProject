const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const initialState = {
    messages: [
        {id:1, text:'Hi! How are you?'},
        {id:2, text:'Hey there!'},
        {id:3, text:'Yo, bro!'},
    ],
    newMessageText: '',
    dialogs: [
        {id:1, name: 'Anatoliy', avatar:"https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png"},
        {id:2, name: 'Evgenia', avatar: "https://www.pnglot.com/pngfile/detail/88-882201_woman-computer-icons-avatar-female-character-clipart-face.png"},
        {id:3, name: 'Andrew', avatar: "https://www.publicdomainpictures.net/pictures/270000/nahled/man-avatar.jpg"},
        {id:4, name: 'Egor', avatar: "http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png"},
        {id:5, name: 'Shasha', avatar: "https://freerangestock.com/sample/116135/handsome-man-avatar-.jpg"},
        {id:6, name: 'Victor', avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGAbKlEoBvZsRUMCpKHGourl0MjUaioqmkbpPhWG7QgKHMojjdw"},
    ]
};
const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE : {
            let newMessage = {
                id: 4,
                text: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_MESSAGE : {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
        default:
            return state;
    }

};

export const addMessageActionCreator = () => ({ type:ADD_MESSAGE });
export const updateMessageActionCreator = (text) =>
    ({type: UPDATE_MESSAGE, newMessageText: text});

export default dialogReducer;
