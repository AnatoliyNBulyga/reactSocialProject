
const initialState = {
    friends: [
        {id:1, name: 'Masha', avatar: 'https://cdn3.iconfinder.com/data/icons/accounting-1/80/Account-18-512.png'},
        {id:2, name: 'Oleg', avatar: 'https://cdn3.iconfinder.com/data/icons/accounting-1/80/Account-19-512.png'},
        {id:3, name: 'Yana', avatar: 'https://cdn3.iconfinder.com/data/icons/accounting-1/80/Account-12-512.png'}
    ]
}
const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;