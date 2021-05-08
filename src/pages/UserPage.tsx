import React, {useEffect, useState} from 'react';
import List from "../components/List";
import {ITodo, IUser} from "../types/types";
import {UserItem} from "../components/UserItem";
import axios from "axios";
import {useHistory} from "react-router-dom";

const UserPage = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory()

    useEffect(() => {
        getUsers()
    }, [])

    async function getUsers() {
        try {
            const {data} = await axios.get<IUser[]>('http://jsonplaceholder.typicode.com/users')
            setUsers(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            {/*<UserList users={users}/> Первый метод простой использований типи*/}
            <List items={users}
                  renderItems={(user: IUser) => <UserItem getIdUser={(id: number) => history.push(`users/${id}`)}
                                                          items={user}
                                                          key={user.id}/>}/> {/* Второй метод с использование generic type. Здесь типа создает мидллваер компонент List*/}
        </div>
    );
};

export default UserPage;
