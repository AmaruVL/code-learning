require 'json'
dic = {
  key1: 'Hola',
  key2: 'Mundo',
  key3: 'Moderno',
}

jsonfile = JSON.generate(dic)
hash = JSON.parse(jsonfile)

puts hash['key1']
# puts jsonfile
# puts dic['key1']