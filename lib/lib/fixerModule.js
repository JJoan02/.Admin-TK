const { fix } = require('./fixerModule');
const uri = "mongodb+srv://JJoan02:Joan7315@cluster0.8atwt.mongodb.net/?retryWrites=true&w=majority";
const result = fix(uri);

if (result.status === 200 && result.url) {
  console.log("URL corregida:", result.url);
} else {
  console.error("[ ERROR ] Mongodb URL not found!");
}
