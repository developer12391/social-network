const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id:1, name: 'Rock William'},
        {id:2, name: 'Mila William'},
        {id:3, name: 'Johnson Dua'}
    ],
    messages: [
        {id:1, message: 'Hi! What are you doing'},
        {id:2, message: 'Hi! How are you miss'},
        {id:3, message: 'Hi! How are you today'}
    ]
}
const messagesReducer =(state=initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE :
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id:4, message: body}]
            };
        default: return state;
    }
}

export const addMessageAC=(newMessageBody)=>({type:ADD_MESSAGE,newMessageBody});

export default messagesReducer;