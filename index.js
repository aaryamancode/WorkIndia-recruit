const express = require('express')
const app = express();
const http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
    database: "exam",
    host: "179.29.224.1:6603",
    user: "root",
    password: "example"
});

con.connect((err) => {
    console.error(`Error while connecting database ${err}`)
});

app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder



app.get("/", (req, res) => {
    return res.render("index.ejs");
});


app.get("/users", (request, response) => {
    return response.send(["PRatyush", "Arya"]);
});

const sql = "Select * from ORDERS";

app.get("/state", async (req, res) => {
    con.query(sql, (res) => {
        
    })
})

const server = http.Server(app);

server.listen(5000, () => {
    console.log("Server started on port 5000");
});