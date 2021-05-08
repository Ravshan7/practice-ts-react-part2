import React, {FC} from "react";
import {IUser} from "../types/types";


interface IUserItem {
    items: IUser,
    getIdUser: (id: number) => void
}

export const UserItem: FC<IUserItem> = ({items, getIdUser}) => <p onClick={() => getIdUser(items.id)} style={{
    padding: '15px',
    border: '1px solid #ccc'
}}>{items.id} {items.name} проживает в городе {items.address.city} на улице {items.address.street} {items.phone}</p>