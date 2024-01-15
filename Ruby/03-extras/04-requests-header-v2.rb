require 'httparty' #gem install httparty

url = 'https://api.apis.net.pe/v1/dni?numero=12345432'
headers = {
  Authorization: "apis-token-4376.6mC0jIagoK4MXMjvHEZZnaIggeCj1buq"
}

response = HTTParty.get(url, headers: headers)
puts response.body

