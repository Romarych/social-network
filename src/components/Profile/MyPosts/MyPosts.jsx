import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import MyPostsReduxForm from "./MyPostsForm/MyPostsForm";

const MyPosts = React.memo( props => {
    let postsElements = [...props.profilePage.posts].reverse().map(p => <Post massage={p.message} likes={p.likes} key={p.id} id={p.id} />)

    let onAddPost = (values) => {
        props.addPost(values.post);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <MyPostsReduxForm onSubmit={onAddPost} {...props} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

// class MyPosts extends React.PureComponent {

//     // shouldComponentUpdate(nextProps, nextState) {
//     //     return nextProps != this.props || nextState != this.state
//     // }

//     render() {
//         console.log("render")
//         let postsElements = this.props.profilePage.posts.map(p => <Post massage={p.message} likes={p.likes} key={p.id} id={p.id} />)
//         const onAddPost = (values) => {
//             this.props.addPost(values.post);
//         }
//         return (
//             <div className={s.postsBlock}>
//                 <h3>My post</h3>
//                 <div>
//                     <MyPostsReduxForm onSubmit={onAddPost} {...this.props} />
//                 </div>
//                 <div className={s.posts}>
//                     {postsElements}
//                 </div>
//             </div>
//         )
//     }  
// }

export default MyPosts;