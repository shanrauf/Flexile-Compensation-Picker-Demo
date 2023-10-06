class CreateContractors < ActiveRecord::Migration[7.1]
  def change
    create_table :contractors do |t|
      t.string :full_name
      t.string :role

      t.timestamps
    end
  end
end
