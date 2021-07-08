const initialState = {
    username: 'katigbanoma',
    password: '',
    retypepassword: ''
}
const registerReducer = (state= initialState, action: { type: string; payload: string; }) => {
    switch (action.type) {
        case 'USERNAME':
            return {...state, username: action.payload}
            break;
        case 'PASSWORD':
            return {...state, password: action.payload}
        case 'RETYPEPASSWORD':
            return {...state, retypepassword: action.payload}
        default:
            break;
    } 
}
export default registerReducer