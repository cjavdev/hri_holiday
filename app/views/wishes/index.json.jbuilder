json.array! @wishes do |wish|
  json.id wish.id
  json.note wish.note
  json.latitude wish.latitude
  json.longitude wish.longitude
  json.from_gravatar gravatar_url(wish.from_email)
  json.to_gravatar gravatar_url(wish.to_email)
end
