const { MongoClient, ServerApiVersion } = require('mongodb');

// URI de conexión corregida
const uri = "mongodb+srv://JJoan02:Joan7315@cluster0.8atwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Crear un cliente de MongoDB con opciones específicas
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Conectar al servidor de MongoDB
    await client.connect();
    // Enviar un ping para confirmar una conexión exitosa
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Asegurarse de cerrar el cliente al finalizar
    await client.close();
  }
}

// Ejecutar la función asincrónica y manejar errores
run().catch(console.dir);

