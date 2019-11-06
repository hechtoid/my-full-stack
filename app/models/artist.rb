class Artist < ApplicationRecord
    validates :artist_name, :date_released, :artist_image, :about, presence: true
    validates :artist_name, uniqueness: true
    has_many :songs
end
