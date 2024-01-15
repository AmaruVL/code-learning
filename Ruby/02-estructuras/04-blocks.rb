def test 
  puts "You are in the method"
  yield
  puts "You are again back to the method"
  yield
end

test {puts "You are in the block"} #block

##------------------with parameters
def test2
  yield 5
  puts "You are in the method test"
  yield 100
end
test2 {|i| puts "You are in the block #{i}"}


def test3
  yield 3,5
  puts "You are in the method test"
end

test3 {|a,b| puts "You passed the numbers #{a} y #{b}"}

#-----------enviando block como parametro

def test4(&block)
  block.call
end

test4 {puts "This is a block"}

#---------BEGIN and END blocks

BEGIN {  
  # BEGIN block code 
  puts "BEGIN code block"
} 

END { 
  # END block code 
  puts "END code block"
}
  # MAIN block code 
puts "MAIN code block"