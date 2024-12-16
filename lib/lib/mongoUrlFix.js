const { MongoClient, ServerApiVersion } = require('mongodb');

// Reemplazamos <db_password> con la contraseña actualizada
const uri = "mongodb+srv://JJoan02:JJoan02@cluster0.8atwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Crear un cliente de MongoClient con las opciones necesarias
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Conecta el cliente al servidor
    await client.connect();
    // Envía un ping para confirmar la conexión exitosa
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Asegúrate de cerrar la conexión al terminar
    await client.close();
  }
}

run().catch(console.dir);

