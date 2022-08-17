const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const datastore = require("@seald-io/nedb");
const db = new datastore({ autoload: true });

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
// db.insert({type:"object",browsename:"192.168.1.1"})
// db.find({}, function(err, docs){
//     if (err){
//         console.log(err);
//     } else {
//         console.log(docs);
//     }
// });

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);