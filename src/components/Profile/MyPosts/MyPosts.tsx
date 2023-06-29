import {ChangeEvent} from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
  state: ProfilePageType
  sendPost: () => void
  changePost: (text: string) => void
}

function MyPosts(props: MyPostsPropsType) {

  const mappedPosts = props.state.posts.map((item: PostType) => {
    return (
      <Post message={item.message} likes={item.likes}/>
    )
  })

  const onClickSendPostHandler = () => {
    props.sendPost()
  }

  const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.changePost(event.currentTarget.value)
  }

  return (
    <div className={style.myPosts}>
      <div className={style.myPosts__title}>My posts</div>
      <div className={`${style.sendForm} ${style.myPosts__sendForm}`}>
        <textarea value={props.state.newPost} onChange={onChangeTextHandler} className={style.sendForm__area}></textarea>
        <button onClick={onClickSendPostHandler} className={style.sendForm__btn}>Send it</button>
      </div>
      <div className={style.myPosts__published}>
        {mappedPosts}
      </div>
    </div>
  )
}

export default MyPosts;