range1 = (1..10).to_a
range2 = ('a'..'f').to_a
puts "#{range1}"
puts "#{range2}"

#----------Metodos
digits = 0..9

puts digits.include?(5) #Contiene
ret = digits.min #Minimo
puts "Min value is #{ret}"

ret = digits.max # Max
puts "Max value is #{ret}"

ret = digits.reject {|i| i < 5 } #No cumplen la condicion
puts "Rejected values are #{ret}"

digits.each do |digit| #Iterar
   puts "In Loop #{digit}"
end