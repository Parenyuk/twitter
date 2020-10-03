import React from 'react';
import './App.css';
import {SignIn} from './pages/SignIn';
import {Home} from './pages/Home';
import {Switch, Route} from 'react-router-dom'



function App() {
    return (
        <div>
            <Switch>
                <Route path={'/signin'} component={SignIn} />
                <Route path={'/'} component={Home} />
            </Switch>

        </div>
    );
}

export default App;
