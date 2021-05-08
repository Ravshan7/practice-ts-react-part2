import React from 'react';
import Card, {ECardVariable} from "../components/Card";

const MainScreen = () => {

    const handlerClick = (id: number): void => {
        console.log(id)
    }


    return (
        <div>
            <Card onFunClick={handlerClick} variable={ECardVariable.BORDER_RED} width='200px' height='200px'>
                <button>Конпка</button>
            </Card>
        </div>
    );
};

export default MainScreen;
