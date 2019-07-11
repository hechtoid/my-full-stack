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
import ArtistIndexContainer from './artist/artist_index_container'
import ArtistShowContainer from './artist/artist_show_container'
import Home from './home/home'

const App = () => (
    <div className="app">
        <header>
            <Banner />
        </header>
        <Switch>
            <AuthRoute exact path="/signin" component={SignInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/albums" component={Album} />
            <ProtectedRoute exact path="/albums/:albumId" component={Album} />
            <ProtectedRoute exact path="/albums/:albumId/artists" component={ArtistIndexContainer} />
            <ProtectedRoute exact path="/albums/:albumId/artists/:artistId" component={ArtistShowContainer} />
            
            
            <Route exact path="/" component={Home} />
        </Switch>

    </div>
);

export default App;
