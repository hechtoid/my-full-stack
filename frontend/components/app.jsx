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
import Song from './song/song'
import Home from './home/home'

const App = () => (
    <div className="app">
        <header>
            <nav className="banner"> 
            <a 
            // href="https://www.appacademy.io/"
            href="https://en.wikipedia.org/wiki/Dark_Side_of_the_Rainbow"
            className='aa' 
            target="_blank"
            >
                <img className='logo' src='tent.svg'>
                </img>
            </a>
            <div className="header-links">
                <Link to="/" className="header-link">
                    <span>nurdCamp</span>
                </Link>
                <Link to="/albums/1" className="albums-link">
                    <span>Album</span>
                </Link>
                <Link to="/albums/1/artists/" className="artists-link">
                    <span>Artists</span>
                </Link>
                <Link to="/song/" className="song-link">
                    <span>Song</span>
                </Link>
                    <span className="banner-clef">𝄞</span>
                <a 
                    href="https://en.wikipedia.org/wiki/Dark_Side_of_the_Rainbow"
                    // href="https://hechtoid.github.io/portfolio/"
                target="_blank"
                className="wiki-link">
                About
                </a>
            </div>
            <Banner />
            </nav>
        </header>
        <section>
        <Switch>
            <AuthRoute exact path="/signin" component={SignInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/albums" component={Album} />
            <ProtectedRoute exact path="/albums/:albumId" component={Album} />
            <ProtectedRoute exact path="/albums/:albumId/artists" component={ArtistIndexContainer} />
            <ProtectedRoute exact path="/albums/:albumId/artists/:artistId" component={ArtistShowContainer} />
            <ProtectedRoute exact path="/song" component={Song} />

            
            <ProtectedRoute exact path="/" component={Home} />
        </Switch>
        </section>
        <footer>
            <i>my Links go here</i>
        </footer>
    </div>
);

export default App;
