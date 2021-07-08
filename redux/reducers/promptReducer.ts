const promptReducer = (state = false, action: { type: any; }) => {
    switch(action.type){
        case 'PROMPT':
            return !state
        default:
            return state
            break;
    }
}

export default promptReducer