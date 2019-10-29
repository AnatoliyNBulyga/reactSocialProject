let renderEntireTree = () => {
    console.log('State changed');
}

let state = {
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
        newMessage: '',
        dialogs: [
            {id:1, name: 'Anatoliy', avatar:"https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png"},
            {id:2, name: 'Evgenia', avatar: "https://www.pnglot.com/pngfile/detail/88-882201_woman-computer-icons-avatar-female-character-clipart-face.png"},
            {id:3, name: 'Andrew', avatar: "https://www.publicdomainpictures.net/pictures/270000/nahled/man-avatar.jpg"},
            {id:4, name: 'Egor', avatar: "http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png"},
            {id:5, name: 'Shasha', avatar: "https://freerangestock.com/sample/116135/handsome-man-avatar-.jpg"},
            {id:6, name: 'Victor', avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGAbKlEoBvZsRUMCpKHGourl0MjUaioqmkbpPhWG7QgKHMojjdw"},
        ]
    }

}

 export const addPost = () => {
    let newPost = {
        id: 3,
        text: state.profilePage.newPostText,
        likesCount: '+' + 5
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
export const addMessage = () => {
    let newMessage = {
        id: 4,
        text: state.dialogsPage.newMessage
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    renderEntireTree(state);
}
export const updateMessage = (newMessage) => {
    state.dialogsPage.newMessage = newMessage;
    renderEntireTree(state);
}
export const subscribe = (observer) => {
     renderEntireTree = observer; // observer
}

export default state;