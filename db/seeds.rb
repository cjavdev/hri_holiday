
10.times do
  from = User.create(email: Faker::Internet.email)
  to = User.create(email: Faker::Internet.email)

  Wish.create!(
    wisher: from,
    wishee: to,
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude
  )
end
