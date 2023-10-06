# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2023_10_06_080832) do
  create_table "compensation_packages", force: :cascade do |t|
    t.string "label"
    t.float "stock_options_percentage"
    t.integer "hours_per_week"
    t.integer "weeks_per_year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contractors", force: :cascade do |t|
    t.string "full_name"
    t.string "role"
    t.string "location"
    t.date "joined_on"
    t.float "hourly_rate"
    t.integer "hours_per_week"
    t.integer "weeks_per_year"
    t.float "stock_options_percentage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
