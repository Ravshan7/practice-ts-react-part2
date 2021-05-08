// Зачем нам нужны отдельный тип? Нам нужны для того чтобы создать глобальные типи чтобы каждый раз в приложение не создавать такие типи

type TAddress = {
    street: string,
    city: string,
    zipcode: string
}


export interface IUser {
    id: number,
    name: string,
    email: string,
    address: TAddress,
    phone: string
}

export interface ITodo {
    id: number,
    title: string,
    completed: boolean
}