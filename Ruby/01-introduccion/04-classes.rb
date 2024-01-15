class Customer
  @@no_of_customers = 0 # Class variables

  def initialize(id,name,addr)
    @cust_id = id # Instance variables
    @cust_name = name
    @cust_addr = addr
  end
end

# Creando objetos
cust1 = Customer.new("1","Jhon","Wiston Apartments")
cust2 = Customer.new("2","Eliot","New Empire Road")


#-------------------

class Sample
  def hello
    puts "Hello Ruby!"
  end
end


object = Sample. new
object.hello


