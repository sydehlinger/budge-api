var express = require("express");
var router = express.Router();
var multer = require('multer');
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname )
    }
});

router.post('/',function(req, res) {
    console.log("in upload file")

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)

    })

});

const dir = '/Users/Sydney/Documents/Development/budge/api/public';

// var upload = if(fs.existsSync(dir + '/' + file.originalname)){
//     return "file already exits";
// }else{
//     multer({ storage: storage }).single('file');
// }

var upload = multer({ storage: storage }).single('file');


module.exports = router;