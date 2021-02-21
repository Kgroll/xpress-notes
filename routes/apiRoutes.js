const fs = require("fs");

const path = require("path");


//var data = JSON.parse(fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'), 'utf8'));

module.exports = (app) => {
//GET
    app.get("/api/notes/", (req, res) => {
        fs.readFile(path.join(__dirname, '../Develop/db/db.json'), (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
    });
});


//POST
app.post("/api/notes", (res, req) => {
    let newNotes = req.body;
 
    fs.readFile(path.join(__dirname, "../Develop/db/db.json"), (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        dbData.push(newNotes);
        let number = 1;
        dbData.forEach(note, index);
            note.id = number;
            number++;
            return dbData;
        });
        console.log(dbData);

        stringData = JSON.stringify(dbData);

        fs.writeFile(path.join(__dirname, "../Develop/db.db.json"), stringData, (err, data) => {
            if (err) throw err;
        });
    });
    
};


















