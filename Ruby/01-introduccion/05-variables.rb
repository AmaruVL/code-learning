=begin
$var -> Global variable (dont recomend to use)
@@var -> class variable
@var -> instace variable

var or _var -> local variable (begin with lowecase letter)
VAR -> constant (begin with uppercase letther)
pseudo-variables -> with spacial names like self, true, nil (undefined),...
=end

$global_variable = 10
class Class1
  def print_global
    puts "Global variable in Class1 is #$global_variable"
  end
end

class Class2
  @@number = 12
  VAR = 14
  def print_global
    puts "Global variable in Class2 is #$global_variable"
    puts "Class variable in Class2 is #@@number"
    puts "Constant in Class2 is #{VAR}"
  end
end

class1obj = Class1. new
class1obj.print_global
class2obj = Class2. new
class2obj.print_global

#--------------------------------
var_integer = 123
puts "Multiplication value: #{24*32*2}"

# ARRAYS
# Se ignora la coma al final del array
array = ["amlol", 10, 32.2, "This is a string",]

# array.each do |i|
#   puts i
# end

#HASH
hash = colors = {"red" => 30, "green" => 12, "blue"=>28}
# hash.each do |key,value|
#   print key, " is ", value, "\n"
# end

#RANGE
(10..15).each do |n|
  print n, ' '
end
