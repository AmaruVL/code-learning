names = Array.new(4,"mac")
puts names.length
puts "#{names}"

#-------with block
nums = Array.new(10) {|e| e = 2*e}
puts "#{nums}"

#--------
digits = Array(1..4)
puts "#{digits}"

#-----
puts digits.at(3)