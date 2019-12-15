import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import { IssuePage } from '../Searchbar/IssuePage/IssuePage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Searchbar} />
            <Route exact path="/issues/:id" component={IssuePage} />
        </Switch>
    </main>
);

export default Main;