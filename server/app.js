const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require("./routes/users");
const CONNECTION_URL = "mongodb+srv://georgiana:icididi@wpcluster-7zr2x.mongodb.net/weddingPlanner?retryWrites=true";
var app = Express();
mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true });
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET, PUT, POST, PATCH, DELETE');
        res.status(200).json({});
    }
    next();
});
app.use("/users", user);
app.listen(8080, ()=> console.log("Listening to 8080..."));



// app.listen(3000, () => {
//     MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
//         if(error) {
//             throw error;
//         }
//         database = client.db(DATABASE_NAME);
//         collection = database.collection("user");
//         console.log("Connected to `" + DATABASE_NAME + "`!");
//     });
// });


// app.get("/users", (request, response) => {
//     collection.find({}).toArray((error, result) => {
//         if(error) {
//             return response.status(500).send(error);
//         }
//         response.send(result);
//     });
// });

// app.post("/user", (request, response) => {
//     collection.insert(request.body, (error, result) => {
//         if(error) {
//             return response.status(500).send(error);
//         }
//         response.send(result.result);
//     });
// });