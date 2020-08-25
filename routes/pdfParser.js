var express = require("express");
var router = express.Router();
const csv = require('csv-parser');
const fs = require('fs');

router.get("/", function(req, res) {
    const results = [];


    fs.createReadStream('/Users/Sydney/Documents/Development/budge/api/public/All_Payment_Methods072720 (1).csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log('-------------------------------');
            console.log(results);
            console.log('-------------------------------');
            res.send(results);
        });
});

module.exports = router;