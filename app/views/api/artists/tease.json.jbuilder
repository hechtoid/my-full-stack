@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :artist_name, :artist_image
    end
end
