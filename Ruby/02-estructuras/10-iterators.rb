arr = [1,2,3,5]

arr.each do |i|
  puts i
end

newArr = arr.collect{|x| 10*x}
puts "#{newArr}"