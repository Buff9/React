import {useEffect, useState} from "react";
import User from "../user/user";
import {getUsers} from "../../services/user.api.service";

export default function Users(){
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers()
            .then(value => setUsers([...value]))
    }, []);
    return (
        <div>
            {users.map(value => <User key={value.id} item = {value}/> )}
        </div>
    )
}