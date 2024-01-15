# node-clean
Encriptar contraseña no afecta al controller

Solo en la implementación del datasource


Inyección de dependencias -> Definir una funcion que se recibira en el constructor

$ openssl rand -hex 32 -> generar token random


ARQUITECTURA
Basada en domain driving design con patron repositorio

AGREGAR CONTROLLER
Crear DTO
Crear en domain/datasource y domain/repositories en ese orden
Crear sus implementaciones en infrastructure (datasource y reposotiry en ese orden)
Crear caso de uso

________________________________-
Config -> Adapters, envs
Data -> Referencia de bases de datos
Domain -> Reglas de negocio, no debería tener dependencias
  Datasources -> Reglas de como luciran la fuentes de datos, reglas que tienen que cumplir
  Dtos -> Objetos para mover datos, con validaciones
  Entidades -> Similiar a modelos de la base de datos, la app trabajara con las entidades
  Errores -> Manejar los errores personalizados
  Repositories -> Reglas de como deberán lucir los repositorios
  Casos de uso -> Indicar que tiene que llamar o que dependencias necesita para poder ejecutar algo
Infrastructure -> Implementaciones
  Datasource -> Implementaciones de la bd
  Mapper -> Objecto que transforma a otro objeto personalizado, normalmente a una entidad
  Repositories -> Llama al datasource, puente para llamar a los datasource, no se llaman directamente al datasource
Presentation -> Tiene que ver lo que va más de cara con el usuario final

Shared -> Solo dominio e infrastructura
