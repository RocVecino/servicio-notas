const mongoose = require("mongoose");

//const url = (process.env.MONGO_URL ||"mongodb://localhost/NotasDatabase"); // Para arrancar en localhost
const url = (process.env.MONGO_URL ||"mongodb://mongo/NotasDatabase"); //Para arrancar el docker o deploy en okteto
mongoose.connect(url ,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.once("open", ( ) => {
  console.log("Database connected:", url);
});

db.on("error", ( ) => {
  console.error("connection error");
});

module.exports =  mongoose;
