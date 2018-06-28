const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
let colors = [];


//GET all the colors
router.get('/', (req, res) => {
    const queryString = 'SELECT * FROM colors';   
    pool.query(queryString)
    .then((result) => {
        res.send(result.rows);
        console.log(result.rows);
    })
    .catch((err) => {
        console.log('Error getting all colors: ', err);
        res.sendStatus(500);
    })
});

//ad a new color object to the array (req.body)
router.post('/', (req, res) => {
    let newColor = req.body;
    const queryText = `INSERT INTO colors(color, count) 
    VALUES ($1, $2)`;
    pool.query(queryText, [newColor.color, newColor.count])
    .then((results) => {
        console.log('Successful add of colors', req.body);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('Error adding colors', err);
        res.sendStatus(500);
    });
});

router.delete('/', (req, res)=>{
    // const queryString = 'DELETE FROM colors WHERE id'
    colors = [];
    res.sendStatus(200);
})


module.exports = router;