const express = require('express');
const router = express.Router();
let colors = [];


//GET all the colors
router.get('/', (req, res) => {
    res.send(colors);
});

//ad a new color object to the array (req.body)
router.post('/', (req, res) => {
    console.log(req.body);
    colors.push(req.body);
    res.sendStatus(201);
});

router.delete('/', (req, res)=>{
    // const queryString = 'DELETE FROM colors WHERE id'
    colors = [];
    res.sendStatus(200);
})


module.exports = router;