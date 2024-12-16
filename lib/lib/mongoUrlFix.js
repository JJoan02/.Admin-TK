const { fix } = require('./fixerModule'); // Asumiendo que así se llama
const uri = "mongodb+srv://JJoan02:Joan7315@cluster0.8atwt.mongodb.net/?retryWrites=true&w=majority";

const result = fix(uri);

if (result.status === 200 && result.url) {
  console.log("URL corregida:", result.url);
  
  // Usa la URL corregida para tu MongoClient
  const client = new MongoClient(result.url, { ...opciones });
  
  // Ahora intentas conectarte con la URL corregida
} else {
  console.log("[ ERROR ] Mongodb URL not found!");
}
