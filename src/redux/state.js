import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";


let store = {
    _state: {
        menu: {
            links:[
                {id: 1, name: 'Home', to: '/home'},
                {id: 2, name: 'Listing', to: '/listing'},
                {id: 3, name: 'Users Profiles', to: '/findProfiles'},
                {id: 4, name: 'Messages', to: '/messages'},
                {id: 5, name: 'Saved', to: '/saved'},
                {id: 6, name: 'Most Viewed', to: '/viewed'},
                {id: 7, name: 'Following', to: '/following'},
                {id: 8, name: 'Payment', to: '/payment'},
                {id: 9, name: 'Help', to: '/help'},
                {id: 10, name: 'Setting', to: '/settings'},
                {id: 11, name: 'Send Feedback', to: '/feedback'}
            ]
        },
        messagesPage: {
            dialogs: [
                {id:1, name: 'Rock William'},
                {id:2, name: 'Mila William'},
                {id:3, name: 'Johnson Dua'}
            ],
            messages: [
                {id:1, message: 'Hi! What are you doing'},
                {id:2, message: 'Hi! How are you miss'},
                {id:3, message: 'Hi! How are you today'}
            ],
            newMessage:'here newMessage'
        },
        listingPage: {
            kinds: [
                {id: 1,name: 'Place'},
                {id: 2,name: 'Music'}
            ],
            postsData: [
                {id: 1, title:'Global Festival', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                        'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                        'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                        ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                        'Suspendisse pretium ullamcorper neque et aliquam.\n', location:'India'},
                {id: 2, title:'House for Sale', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                        'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                        'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                        ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                        'Suspendisse pretium ullamcorper neque et aliquam.\n', location:'New York City'},
                {id: 3, title:'Pixel Cinema', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                        'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                        'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                        ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                        'Suspendisse pretium ullamcorper neque et aliquam.\n', location:'Australia'},

            ],
            newTitleText: 'title here',
            newDescriptionText: 'description here'
        }
    },
    getState() {
        return this._state;
    },
    _newSubscribe () {
    },
    subscribe (observer) {
        this._newSubscribe = observer;
    },
    dispatch(action) {
        this._state.listingPage= profileReducer(this._state.listingPage, action);
        this._state.messagesPage=messagesReducer (this._state.messagesPage,action);
        this._newSubscribe(this._state);
    },
}

export default store;