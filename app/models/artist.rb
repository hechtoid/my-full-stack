class Artist < ApplicationRecord
    validates :artist_name, :date_released, :artist_image, :about, :live, presence: true
    has_many :songs
end
