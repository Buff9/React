import {useEffect, useState} from "react";
import User from "./Components/User";
import Comments from "./Components/comments";
import Posts from "./Components/posts";
import "./App.css"
export default function App() {


  let [usersList, setUsersList] = useState([]);
  let [commentList, setCommentList] = useState([]);
  let [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          setUsersList(users);
        });
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => {
          setCommentList(comments);
        });
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
          setPostList(posts);
        });


  }, []);

  return (
      <div>
        <div className={'wrapper'}>


          <div className={'top'}>
            <div className={'top-left'}>
              <h1>Users</h1>
                <div className={'top-left-text'}>
                    {usersList.map(user => <User id={user.id} name={user.name} username={user.username}/>)}
                </div>
            </div>

            <div className={'top-right'}>
              <div className={'top-right-title'}><h1>Comments</h1></div>
              <div className={'top-right-text'}>
                {commentList.map(comments => <Comments id={comments.id} name={comments.name} email={comments.email} body={comments.body}/>)}
              </div>
            </div>
          </div>

          <div className={'bottom'}>
            <div className={'bottom-title'}><h1>Posts</h1></div>
            <div className={'bottom-text'}>
              {postList.map(posts => <Posts id={posts.id} title={posts.title} body={posts.body}/>)}
            </div>
          </div>

        </div>
      </div>
  );
}
