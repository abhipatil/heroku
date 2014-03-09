class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :last_name
      t.string :email
      t.string :phno
      t.string :message

      t.timestamps
    end
  end
end
