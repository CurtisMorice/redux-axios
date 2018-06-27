const express = require('express');
const app = express();
const pool = require('./modules/pool');
const bodyParser = require('body-parser');
const messages = require('./routes/messaging.router');
// Route includes
const colorRouter = require('./routes/color.router');

//uses
app.use(express.static('server/public'));
app.use(bodyParser.json());
/* Routes */
app.use('/api/colors', colorRouter);
app.use(express.static('build'));


//port
const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log(`listening on PORT`, port);
});








