const { MongoClient } = require('mongodb');
const { fix } = require('./fixerModule'); // Asegúrate de que el nombre y la ruta del archivo son correctos

// URL inicial
const uri = "mongodb+srv://JJoan02:Joan@7315@cluster0.8atwt.mongodb.net/?retryWrites=true&w=majority";

// Corregir la URL
const result = fix(uri);

if (result.status === 200 && result.url) {
  console.log("URL corregida:", result.url);

  // Opciones para el cliente de MongoDB (ajustar según necesidad)
  const opciones = {
    serverApi: {
      version: "1", // Puedes ajustar a la versión que necesites
      strict: true,
      deprecationErrors: true,
    },
  };

  // Crear cliente de MongoDB con la URL corregida
  const client = new MongoClient(result.url, opciones);

  // Función para probar la conexión
  async function run() {
    try {
      await client.connect(); // Conectar al servidor
      await client.db("admin").command({ ping: 1 }); // Probar conexión con ping
      console.log("¡Conexión exitosa a MongoDB!");
    } catch (err) {
      console.error("Error al conectar a MongoDB:", err);
    } finally {
      await client.close(); // Cerrar conexión
    }
  }

  run().catch(console.dir);
} else {
  console.error("[ ERROR ] Mongodb URL not found!");
}
