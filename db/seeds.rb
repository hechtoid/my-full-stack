# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(
    username: 'demo',
    password: 'demodemo',
    email: 'demo'
)
User.create!(
    username: 'user',
    password: 'password',
    email: 'email'
)
Artist.create!(
    artist_name: "Pink Floyd",
    date_formed: 1965,
    artist_image: "pinkfloyd.jpg", 
    about: "trippy"
)
Artist.create!(
    artist_name: "Easy Star All-Stars",
    date_formed: 2003,
    artist_image: "easystar.jpg", 
    about: "heady"
)
Artist.create!(
    artist_name: "Flaming Lips",
    date_formed: 1983,
    artist_image: "flaminglips.jpg", 
    about: "zany"
)





