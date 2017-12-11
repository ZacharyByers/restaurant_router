Restaurant.create(
  name: "#{Faker::Name.first_name}'s",
  address: Faker::Address.street_address,
  phone: Faker::PhoneNumber.cell_phone
)

20.times do
  Restaurant.last.menu_items.create(
    name: Faker::Food.dish,
    price: Faker::Commerce.price,
    description: Faker::Lorem.sentence
  )
end
