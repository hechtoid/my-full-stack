json.set! @artist.id do
    json.extract! @artist, :id, :artist_name, :artist_image, :date_formed, :about
end