#--------functions
def test(a1 = "Ruby", a2 = "Perl")
  puts "The programming language is #{a1}"
  puts "The programming language is #{a2}"
end
test "C", "C++" #LLamando a la funcion con parametros
test

#------------------With return
def test2
  i,j,k = 12,53,38
  return i,j,k
end

var = test2
puts var

#--------with variable number of parameters

def sample (*test)
  puts "The number of parameters is #{test.length}"
  for i in 0...test.length
     puts "The parameters are #{test[i]}"
  end
end

sample "Mario", 12, "Amaru"