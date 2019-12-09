let initialState = {
    links:[
        {id: 1, name: 'Home', to: '/home'},
        {id: 2, name: 'Listing', to: '/listing'},
        {id: 3, name: 'Users Profiles', to: '/findProfiles'},
        {id: 4, name: 'Messages', to: '/messages'},
        {id: 5, name: 'Saved', to: '/saved'},
        {id: 6, name: 'Most Viewed', to: '/viewed'},
        {id: 7, name: 'My profile', to: '/profile'},
        {id: 8, name: 'Payment', to: '/payment'},
        {id: 9, name: 'Help', to: '/help'},
        {id: 10, name: 'Setting', to: '/settings'},
        {id: 11, name: 'Send Feedback', to: '/feedback'}
    ]
}

const menuReducer = (state=initialState,action)=>{
    return state;
}

export default menuReducer;