class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :artist_name, null: false
      t.date :date_formed
      t.string :artist_image
      t.text :about
      t.timestamps
    end
  end
end
