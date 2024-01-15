$i = 0
$num = 5

while $i < $num  do
   puts("Inside the loop i = #$i" )
   $i +=1
end

#----------------- do-while
$i = 0
$num = 5
begin
   puts("Inside the loop i = #$i" )
   $i +=1
end while $i < $num

#------------
#until

#-----------
for i in 0..5
  puts "Value of local variable is #{i}"
end

#forma equivalente al for
(0..5).each do |i|
  puts "Valor de i es #{i}"
end

# Variables especiales en bucles
=begin
- break -> Sale del bucle
- next -> Salta al siguiente bucle
- redo -> vuelve a ejecutar el bucle sin evaluar la condicion
- retry -> Vuelve a ejecutar todo el bucle desde el inicio
=end