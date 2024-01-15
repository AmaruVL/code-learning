def simular_error()
  begin
    puts 'Iniciando funcion'
    # raise 'Error simulado'
    # new_method()
    raise 'Error: Esto es una simulación!'
  rescue Exception => e
    puts e.message # Mensaje
    puts e.backtrace.inspect # Linea del error
  end
end



# Llamando a la funcion
simular_error()