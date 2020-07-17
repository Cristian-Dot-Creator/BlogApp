


const initState = {
    posts: [
        {id:1, title: 'PS5 looks like a wifi Router', image:'../images/ps5.webp', body: 'The new PS5 is finally here, it will come to stores at the end of the year of 2020. The interent is already making fun of the console, making memes that the display the consoles appearence to a wifi router.'},
        {id:2, title: 'XBOX1 looks like a mini-Fridge', image:'../images/xbox.jpg', body: 'The new XBOX is finally here, it will come to stores at the end of the year of 2020. The interent is already making fun of the console, making memes that the display the consoles appearence to a home mini-fridge.'}
    ]
}




const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}


export default rootReducer