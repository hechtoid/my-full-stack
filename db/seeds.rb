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
User.create!(
    username: 'guest',
    password: 'guestpass',
    email: 'guestmail'
)

Artist.create!(
    artist_name: "Pink Floyd",
    date_released: 1973,
    artist_image: "pinkfloyd.jpg", 
    about: "Original",
    live: false
)
Artist.create!(
    artist_name: "Flaming Lips",
    date_released: 2009,
    artist_image: "flaminglips.jpg", 
    about: "Zany",
    live: false
)
Artist.create!(
    artist_name: "Vitamin String Quartet",
    date_released: 2003,
    artist_image: "vsq.jpg", 
    about: "Classical",
    live: false
)
Artist.create!(
    artist_name: "Easy Star All-Stars",
    date_released: 2003,
    artist_image: "easystar.jpg", 
    about: "Heady",
    live: false
)
Artist.create!(
    artist_name: "Nguyên Lê",
    date_released: 2014,
    artist_image: "NguyênLê.jpeg", 
    about: "Jazzy",
    live: false
)
Artist.create!(
    artist_name: "Dream Theater",
    date_released: 2006,
    artist_image: "dreamtheater.jpg", 
    about: "Metal",
    live: true
)
Artist.create!(
    artist_name: "Vocomotion",
    date_released: 2005,
    artist_image: "vocomotion.jpeg", 
    about: "Vocal",
    live: false  
)
Artist.create!(
    artist_name: "Mary Fahl",
    date_released: 2011,
    artist_image: "maryfahl.jpg", 
    about: "Singer-Songwriter",
    live: false  
)
Artist.create!(
    artist_name: "Poor Man's Whiskey",
    date_released: 2001,
    artist_image: "whiskey.jpg", 
    about: "BlueGrass",
    live: true  
)
Artist.create!(
    artist_name: "The Squirrels",
    date_released: 2000,
    artist_image: "skwerl.jpg", 
    about: "Goofy",
    live: false  
)
Artist.create!(
    artist_name: "Billy Sherwood",
    date_released: 2006,
    artist_image: "return.jpg", 
    about: "Return to the",
    live: false  
)
Artist.create!(
    artist_name: "Phish",
    date_released: 1998,
    artist_image: "phish.jpg", 
    about: "Jam",
    live: true  
)


Song.create!(
    title: "Speak to Me",
    artist_id: 1
)
Song.create!(
    title: "Breathe",
    artist_id: 1
)
Song.create!(
    title: "On The Run",
    artist_id: 1
)
Song.create!(
    title: "Time",
    artist_id: 1
)
Song.create!(
    title: "The Great Gig In The Sky",
    artist_id: 1
)
Song.create!(
    title: "Money",
    artist_id: 1
)
Song.create!(
    title: "Us And Them",
    artist_id: 1
)
Song.create!(
    title: "Any Colour You Like",
    artist_id: 1
 )
Song.create!(
    title: "Brain Damage",
    artist_id: 1
)
Song.create!(
    title: "Eclipse",
    artist_id: 1
)

# # Song.create!(
# #     title: "Speak to Me",
# #     artist_id: 2
# # )
# # Song.create!(
# #     title: "Breathe",
# #     artist_id: 2
# # )
# # Song.create!(
# #     title: "On The Run",
# #     artist_id: 2
# # )
# # Song.create!(
# #     title: "Time",
# #     artist_id: 2
# # )
# # Song.create!(
# #     title: "The Great Gig In The Sky",
# #     artist_id: 2
# # )
# # Song.create!(
# #     title: "Money",
# #     artist_id: 2
# # )
# # Song.create!(
# #     title: "Us And Them",
# #     artist_id: 2
# # )
# # Song.create!(
# #     title: "Any Colour You Like",
# #     artist_id: 2
# #  )
# # Song.create!(
# #     title: "Brain Damage",
# #     artist_id: 2
# # )
# # Song.create!(
# #     title: "Eclipse",
# #     artist_id: 2
# # )

# # Song.create!(
# #     title: "Speak to Me",
# #     artist_id: 3
# # )
# # Song.create!(
# #     title: "Breathe",
# #     artist_id: 3
# # )
# # Song.create!(
# #     title: "On The Run",
# #     artist_id: 3
# # )
# # Song.create!(
# #     title: "Time",
# #     artist_id: 3
# # )
# # Song.create!(
# #     title: "The Great Gig In The Sky",
# #     artist_id: 3
# # )
# # Song.create!(
# #     title: "Money",
# #     artist_id: 3
# # )
# # Song.create!(
# #     title: "Us And Them",
# #     artist_id: 3
# # )
# # Song.create!(
# #     title: "Any Colour You Like",
# #     artist_id: 3
# #  )
# # Song.create!(
# #     title: "Brain Damage",
# #     artist_id: 3
# # )
# # Song.create!(
# #     title: "Eclipse",
# #     artist_id: 3
# # )

# # Song.create!(
# #     title: "Speak to Me",
# #     artist_id: 4
# # )
# # Song.create!(
# #     title: "Breathe",
# #     artist_id: 4
# # )
# # Song.create!(
# #     title: "On The Run",
# #     artist_id: 4
# # )
# # Song.create!(
# #     title: "Time",
# #     artist_id: 4
# # )
# # Song.create!(
# #     title: "The Great Gig In The Sky",
# #     artist_id: 4
# # )
# # Song.create!(
# #     title: "Money",
# #     artist_id: 4
# # )
# # Song.create!(
# #     title: "Us And Them",
# #     artist_id: 4
# # )
# # Song.create!(
# #     title: "Any Colour You Like",
# #     artist_id: 4
# #  )
# # Song.create!(
# #     title: "Brain Damage",
# #     artist_id: 4
# # )
# # Song.create!(
# #     title: "Eclipse",
# #     artist_id: 4
# # )