# nethttp.rb
require 'uri'
require 'net/http'

uri = URI('https://api.breakingbadquote3s.xyz/v1/quotes')
res = Net::HTTP.get_response(uri)
data = res.body if res.is_a?(Net::HTTPSuccess)
puts data
# p res.is_a?(Net::HTTPSuccess)