import React from "react";
import { connect } from "react-redux";
import { addPostCreator, updatePostCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {dispatch(addPostCreator(newPostText))},
        // updatePost: (text) => {dispatch(updatePostCreator(text))} 
            
    }
}

const  MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;



















// const MyPostsContainerr = () => {
//     return (
//         <StoreContext.Consumer> 
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostCreator());
//                 } 
//                 let updatePost = (text) => {
//                     let action = updatePostCreator(text);
//                     store.dispatch(action)
//                 }
//                 return (
//                     <MyPosts updatePost={updatePost}
//                     addPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText} />           
//                 )
//             }}
//         </StoreContext.Consumer>
//     )
// }