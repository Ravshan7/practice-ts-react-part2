import React, {ReactNode} from 'react';

interface IList<T> {
    items: T[];
    renderItems: (item: T) => ReactNode;
}

const List = <T extends unknown> (props: IList<T>) => {
    return (
        <div>
            {props.items.map(props.renderItems)}
        </div>
    );
};

export default List;
