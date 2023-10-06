class CreateCompensationPackages < ActiveRecord::Migration[7.1]
  def change
    create_table :compensation_packages do |t|
      t.string :label
      t.float :stock_options_percentage
      t.integer :hours_per_week
      t.integer :weeks_per_year

      t.timestamps
    end
  end
end
