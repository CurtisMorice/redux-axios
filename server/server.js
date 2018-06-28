const express = require('express');
const app = express();
const pool = require('./modules/pool');
const bodyParser = require('body-parser');

// Route includes
const colorRouter = require('./routes/color.router');
app.use(express.static('build'));
/* Routes */
app.use('/api/colors', colorRouter);
//uses
// app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






//port
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log(`listening on PORT`, PORT);
});








