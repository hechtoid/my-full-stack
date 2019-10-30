class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :artist_name, null: false
      t.integer :date_released
      t.string :artist_image
      t.text :about
      t.integer :album_id, default: 1
      t.boolean :live
      t.timestamps
    end
  end
end
