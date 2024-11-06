let express = require("express");
let app = new express();
app.set("view engine","ejs");
// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"yamjamdb.ctk8kygsc2eq.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "Password123!",
  database:"jams",
  port: 3306,
 },
});
app.get("/",(req,res) => {
 knex
 .select()
 .from("jam")
 .then((result) => {
  console.log(result);
  res.render("index",{aJamList:result});
 });
});
app.listen(3000);
