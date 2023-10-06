class CreateContractors < ActiveRecord::Migration[7.1]
  def change
    create_table :contractors do |t|
      t.string :full_name
      t.string :role
      t.string :location
      t.date :joined_on
      t.float :hourly_rate
      t.integer :hours_per_week
      t.integer :weeks_per_year
      t.float :stock_options_percentage

      t.timestamps
    end
  end
end
