require 'uri'
require 'net/http'

uri = URI("https://api.apis.net.pe/v1/dni?numero=70380457")
req = Net::HTTP::Get.new(uri)
req['Authorization'] = "apis-token-4376.6mC0jIagoK4MXMjvHEZZnaIggeCj1buq"

res = Net::HTTP.start(uri.hostname, uri.port) {|http|
  http.request(req)
}

puts res.code
puts res.message
puts res.is_a?(Net::HTTPSuccess)
puts res.body if res.is_a?(Net::HTTPSuccess)