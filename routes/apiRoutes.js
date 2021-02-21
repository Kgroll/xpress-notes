
const fs = require("fs");

const path = require("path");


var dbData = JSON.parse(fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'), 'utf8'));

module.exports = (app) => {
//GET
    app.get("/api/notes", (req, res) => {
        fs.readFile(path.join(__dirname, '../Develop/db/db.json'), (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
    });
});
}

//POST
app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    fs.writeFile(path.join(__dirname, "../Develop/db/db.json"), (err, data) => {
        if (err) {throw err;
    } else {
        return true;
    }

    res.json(dbData);
    
    });
//PUT
    app.put("/api/notes", (req, res) => {
        const editId = req.params.id;

        fs.readFile(path.join(__dirname, "../Develop/db/db.json"), (err, data) => {
            if (err) throw err;

        let notesArr = JSON.parse(data);

        })
    });
}

        /*let selectedNote = notesArr.find(note) () => {
            note.id === editId;

        if (selectedNote) {
            let updateNote = {
                title: req.body.title,
                text: req.body.text,
                id: selectedNote.id,
            };
            let targetIndex = notesArr.indexOf(selectedNote);
            notesArr.splice(targetIndex, 1, updatedNote);
            res.sendStatus(204);
            editNote(notesArr);
            res.json(notesArr);
        } else {
            res.sendStatus(404);
        }
        });*/
       
        
    
    

















)
