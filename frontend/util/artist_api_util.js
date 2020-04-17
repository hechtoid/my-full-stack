export const fetchArtists = () => (
    $.ajax({
        method: 'GET',
        url: 'api/artists'
    })
);

export const teaseArtists = () => (
    $.ajax({
        method: 'GET',
        url: 'api/tease'
    })
);

export const fetchArtist = id => (
    $.ajax({
        method: 'GET',
        url: `api/artists/${id}`
    })
);

export const addArtist = artist => {
    return (
        $.ajax({
            url: 'api/artists',
            method: 'POST',
            data: { artist }
        })
    )
}
