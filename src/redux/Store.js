import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        sidebar: {
            friends: [
                {id:1, name: 'Masha', avatar: 'https://cdn3.iconfinder.com/data/icons/accounting-1/80/Account-18-512.png'},
                {id:2, name: 'Oleg', avatar: 'https://cdn3.iconfinder.com/data/icons/accounting-1/80/Account-19-512.png'},
                {id:3, name: 'Yana', avatar: 'https://cdn3.iconfinder.com/data/icons/accounting-1/80/Account-12-512.png'}
            ]
        },
        profilePage: {
            posts: [
                {id:1, text:'Hi! How are you?', likesCount:'+' + 11},
                {id:2, text:'Hey there!', likesCount: '+' + 10}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        }
    },

    _subscriber() {
        console.log('no subscribers (observer)');
    },

    getState() {
        return this._state;
    },
    dispatch (action) {

        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._subscriber();
        
    },

    subscribe(observer) {
        this._subscriber = observer; // observer
    }
};


export default store;
window.store = store;