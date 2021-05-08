import React, {FC, ReactChildren, ReactNode, useState} from 'react';

export enum ECardVariable {
    BORDER_RED = 'BORDER_RED',
    BACKGROUND_BLUE = 'BACKGROUND_BLUE',
}

interface ICardProps {
    width?: string;
    height?: string;
    variable: ECardVariable
    onFunClick(id: number): void // Здесь функция принимает id по типу number и нечего не возврашает
    // onFunClick(id: number): string функция которые принимает id по типу number и возврашает string
    // children: ReactChildren | ReactNode // Если наш копмонент объявлен функциональной "React.FC" тогда нам не обязятельно написать тип children-а. React.FC за нас делает
}

// const Card = (props: ICardProps) => { Первый способ добавление типы через пропс
// const Card = ({width, height}: ICardProps) => { Второй способ добавление типы через деструктуризация объекта потому что наш props является объектом
// const Card: FC<ICardProps> = ({width, height, children}) => { Трейтий способ: Если мы явно укажем что это у нас React.FC сокрашенно FC то нам не нужно больше указать тип для children это тип называется genetic<>


const Card: FC<ICardProps> = ({
                                  width,
                                  height,
                                  variable,
                                  onFunClick,
                                  children
                              }) => {

    const [count, setCount] = useState<number>(2)

    return (
        <div
            style={{
            width,
            height,
            background: variable === ECardVariable.BACKGROUND_BLUE ? 'blue' : '#ccc',
            border: variable === ECardVariable.BORDER_RED ? '1px solid red' : 'none'}}
            onClick={() => onFunClick(count)}
        >
            {children}
        </div>
    );
};

export default Card;
