# nurdCamp

### nurdCamp is where we study. 
For my Final #FullStackProject i created a rough clone of [bandcamp](https://bandcamp.com/), the artists first music-sharing site. Users can browse artists and their albums, and of course play songs. They will also be able to "purchase" a song or "follow" an artist, linking said media to their user account.


## Technologies
* We utilize a Backend of Ruby on Rails, serving a jbuilder generated api.
    * Rails accesses a PostgreSQL database.
* Our Frontend is dynamically generated through React
    * The Frontend store is managed through ReDux and its cycles.
* Styling is provided by CSS `border-radius` and `:hover{transition:}` 

## Features
* There is an artists index page displaying each artist, a thumbnail image with their name.

* There is an artists show page displaying a larger image, information, and a track-listing, dynamically generated with React Props:
        
        songs = this.props.songs.map(song => {
        return(
            < li
                key={song.id}
                className="song-list-item"
            >
                <span className="clef"> 𝄞 {song.id}:</span> {song.title}
            </li >) 
        })

#* There is a songs show page, with an `<audio>` tag and links to other musical services. 
