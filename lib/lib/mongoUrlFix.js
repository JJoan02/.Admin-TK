const { fix } = require('./fixerModule'); // Asumiendo que así se llama el archivo donde está el método fix
const uri = "mongodb+srv://JJoan02:Joan7315@cluster0.8atwt.mongodb.net/?retryWrites=true&w=majority";
const result = fix(uri);

if (result.status === 200 && result.url) {
  // Usas result.url como la URI definitiva
  console.log("URL corregida:", result.url);
} else {
  console.error("[ ERROR ] Mongodb URL not found!");
}
