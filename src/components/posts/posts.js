import {useEffect, useState} from "react";
import User from "../user/user";
import {getUserPosts} from "../../services/user.api.service";

export default function Posts(){
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getUserPosts()
            .then(value => setPosts([...value]))
    }, []);
    return (
        <div>
            {posts.map(value => <User key={value.id} item = {value}/> )}
        </div>
    )
}