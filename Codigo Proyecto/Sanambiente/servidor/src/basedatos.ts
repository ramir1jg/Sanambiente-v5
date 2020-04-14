// Clase que contiene la conexion con la base de datos en postgreSQL
const { Pool } = require('pg');

// Constante en la cual se establecen los parametros necesarios para conectarse con la base de datos.
const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'sanambiente',
  password: 'admin2019',
  port: 5432,
}

// Se crea una constante que contendra la conexión 
  const pool = new Pool(connectionData);
  pool.connect();
  console.log('base datos conectada');

  // Se exporta la constante que contiene la conexion, la cual se utilizara por las demas clases.
  export default pool;
