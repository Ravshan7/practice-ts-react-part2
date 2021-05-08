import React from 'react';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import MainScreen from "./pages/MainScreen";
import EventPage from "./pages/EventPage";
import UserPage from "./pages/UserPage";
import TodoPage from "./pages/TodoPage";
import UserPageParam from "./components/UserPageParam";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <NavLink to="/" exact>Главная</NavLink>
                <NavLink to="/todos">todos</NavLink>
                <NavLink to="/users" >users</NavLink>
                <NavLink to="/events">events</NavLink>
            </div>
            <div>
                <Route path='/' exact render={() => <MainScreen />}/>
                <Route path='/todos' render={() => <TodoPage />}/>
                <Route path='/users' exact render={() => <UserPage />}/>
                <Route path='/users/:id' render={() => <UserPageParam />}/>
                <Route path='/events'render={() => <EventPage />}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
