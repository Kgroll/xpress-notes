const router = require('express').Router();

const fs = require('fs');



router.get('/api/notes', (req, res) => {
    fs.readFile('../Develop/db/db.json'), (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        res.send(dbData);
    }
    });
router.post('(/api/notes', (req, res) => {
    notes.push(newNote)
    fs.writeFile('../Develop/db/db.json'), (err, data) => {
        if (err) throw err;
        res.json(newNote);
    }
    });
    
module.exports = router;
