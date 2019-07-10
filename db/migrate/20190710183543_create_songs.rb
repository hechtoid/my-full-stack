class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :album_name, default: 'Dark Side of the Moon'
      t.timestamps
    end
  end
end
