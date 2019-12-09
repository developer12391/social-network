import React from "react";
import profileReducer, {addPostAC, deletePost} from "./profile-reducer";

let state = {
    kinds: [
        {id: 1, name: 'Place'},
        {id: 2, name: 'Music'}
    ],
    postsData: [
        {
            id: 1,
            title: 'Global Festival',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'India'
        },
        {
            id: 2,
            title: 'House for Sale',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'New York City'
        },
        {
            id: 3,
            title: 'Pixel Cinema',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'Australia'
        },
    ]
}

it('length of postsData should be incremented', () => {
    let action = addPostAC("Some title");
    let newState = profileReducer(state,action);
    expect(newState.postsData.length).toBe(4);
});

it('after delete length of postsData should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state,action);
    expect(newState.postsData.length).toBe(2);
});

it(`after delete length shouldn't be decrement if it is incorrect`, () => {
    let action = deletePost(100)
    let newState = profileReducer(state,action)
    expect(newState.postsData.length).toBe(3);
});