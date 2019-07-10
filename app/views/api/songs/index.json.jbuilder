@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :title, :album_name
    end
end