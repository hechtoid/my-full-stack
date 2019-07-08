import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Banner from './banner/banner_container'
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Album from './album/album'

const App = () => (
    <div>
        <header>
            <a href="https://www.appacademy.io/"><img className='logo' src='aA.png'></img></a>
            <Link to="/" className="header-link">
                <span>nurdCamp</span>
                </Link>
            <Banner />
        </header>
        <Switch>
            <AuthRoute exact path="/signin" component={SignInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute path="/album" component={Album} />
            <Route exact path="/" to="/" />
        </Switch>

    </div>
);

export default App;
