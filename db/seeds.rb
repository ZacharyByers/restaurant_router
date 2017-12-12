Restaurant.create(
  name: "#{Faker::Name.first_name}'s",
  address: Faker::Address.street_address,
  phone: Faker::PhoneNumber.cell_phone
)

20.times do
  name = Faker::Food.dish
  Restaurant.last.menu_items.create(
    name: name,
    price: Faker::Commerce.price,
    description: Faker::Lorem.sentence,
    photo: "https://robohash.org/#{name}?set=set4"
  )
end
