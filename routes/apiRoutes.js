const router = require('express').Router();

const fs = require('fs');



router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json'), (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        res.send(dbData);
    }
});
router.post('/notes', (req, res) => {
  
    fs.writeFile('./db/db.json'), (err, data) => {
        if (err) throw err;
        res.json(req.body);
    }
    console.log(req.body);
    });

module.exports = router;
