class Artist < ApplicationRecord
    validates :artist_name, presence: true
end
