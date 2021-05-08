import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom'
import {IUser} from "../types/types";
import axios from "axios";

interface IUseParams {
    id: string
}

const UserPageParam = () => {
    const [user, setUser] = useState<IUser | null>(null)

    const param = useParams<IUseParams>()
    const history = useHistory()


    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        try {
            const {data} = await axios.get<IUser>('http://jsonplaceholder.typicode.com/users/' + param.id)
            setUser(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <h1>Страница пользователья {user?.name}</h1>
            <p>{user?.email} {user?.phone}</p>
            <button onClick={() => history.push('/users')}>Назад к списку</button>
        </div>
    );
};

export default UserPageParam;
