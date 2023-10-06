Contractor.destroy_all

Contractor.create!([{
  full_name: "Shan Rauf",
  role: "Engineer",
  location: "Fresno, CA",
  joined_on: Date.new(2023,10,9),
  hourly_rate: 105.0,
  hours_per_week: 20,
  weeks_per_year: 44,
  stock_options_percentage: 50.0
},
{
  full_name: "Sahil Lavingia",
  role: "CEO",
  location: "Statue of Liberty",
  joined_on: Date.new(2011,4,1),
  hourly_rate: 105.0,
  hours_per_week: 35,
  weeks_per_year: 52,
  stock_options_percentage: 100.0
},
{
  full_name: "Maya",
  role: "Engineer",
  location: "Somewhere In Austria?",
  joined_on: Date.new(2021,1,1),
  hourly_rate: 105.0,
  hours_per_week: 35,
  weeks_per_year: 52,
  stock_options_percentage: 50.0
}])

p "Created #{Contractor.count} contractors"

CompensationPackage.destroy_all

CompensationPackage.create!([{
  label: "Default",
  hours_per_week: 20,
  weeks_per_year: 44,
  stock_options_percentage: 50.0
},
{
  label: "All In",
  hours_per_week: 35,
  weeks_per_year: 52,
  stock_options_percentage: 100.0
},
{
  label: "Paper Hands",
  hours_per_week: 35,
  weeks_per_year: 52,
  stock_options_percentage: 0.0
}])

p "Created #{CompensationPackage.count} compensation packages"