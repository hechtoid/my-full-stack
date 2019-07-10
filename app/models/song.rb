class Song < ApplicationRecord
    validates :title, presence: true
    validates :album_name, presence: true
    # validates :track_number, presence: true
end
