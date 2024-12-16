const { MongoClient } = require('mongodb');
const { fix } = require('./fixerModule'); // Importar la función fix desde fixerModule

const uri = "mongodb+srv://JJoan02:Joan7315@cluster0.8atwt.mongodb.net/?retryWrites=true&w=majority";

// Corregir la URL
const result = fix(uri);

if (result.status === 200 && result.url) {
  console.log("URL corregida:", result.url);

  const opciones = {
    serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
    },
  };

  const client = new MongoClient(result.url, opciones);

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
