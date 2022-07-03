import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/redux-store";
import MyPosts, { DispatchPropsType, StatePropsType } from "./MyPosts";

let mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
    }
}

const  MyPostsContainer = connect<StatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPost})(MyPosts);

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