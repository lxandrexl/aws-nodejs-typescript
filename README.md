# Requisitos
- NODEJS 12.x >=
- Cuenta de AWS

# Instalación
- Ejecutar 'npm install' (sin comillas)
- Ejecutar 'npm install -g serverless'
- Ejecutar 'npm install -g win-node-env'
# Uso
- Ejecutar 'sls deploy' (Ejecutar en AWS) o tambien ejecutar 'sls offline' (Ejecutar en entorno local)
- Ejecutar las pruebas unitarias 'npm test'

# Endpoints
- [GET] /pelicula: Retorna el listado de todas las peliculas.
- [GET] /pelicula/{id}: Retorna una pelicula en especifico por su id.
- [POST] /pelicula: Crea una nueva pelicula. (La estructura esta definida con el DTO).