let express = require ('express')
let app = express()
var port = 8080;
app.get('/', (req, res) => res.send('Hello World with Express'));
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});
let apiRoutes = require("./api-routes")
// Use Api routes in the App
app.use('/api', apiRoutes)