const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3004;

let notesData = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));


// api routes

app.get("/api/notes", function(err, res) {
  try {
    notesData = fs.readFileSync("./db/notes.json", "utf8");
    notesData = JSON.parse(notesData);
  } catch (err) {
    console.log("\n error (in app.get.catch):");
    console.log(err);
  }
  //   send objects to the browser
  res.json(notesData);
});

// writes the new note to the json file
app.post("/api/notes", function(req, res) {
  try {
    notesData = fs.readFileSync("./db/notes.json", "utf8");
    console.log(notesData);

    // parse the data to get an array of objects
    notesData = JSON.parse(notesData);
    req.body.id = notesData.length;
    notesData.push(req.body); 
    notesData = JSON.stringify(notesData);
    // writes the new note to file
    fs.writeFile("./db/notes.json", notesData, "utf8", function(err) {
      if (err) throw err;
    });
    // changeit back to an array of objects & send it back to the browser(client)
    res.json(JSON.parse(notesData));
  } catch (err) {
    throw err;
    console.error(err);
  }
});

// Delete a note

app.delete("/api/notes/:id", function(req, res) {
  try {
    notesData = fs.readFileSync("./db/notes.json", "utf8");
    notesData = JSON.parse(notesData);
    notesData = notesData.filter(function(note) {
      return note.id != req.params.id;
    });

    notesData = JSON.stringify(notesData);
    fs.writeFile("./db/notes.json", notesData, "utf8", function(err) {
      if (err) throw err;
    });

    // change it back to an array of objects & send it back to the browser (client)
    res.send(JSON.parse(notesData));
  } catch (err) {
    throw err;
    console.log(err);
  }
});

// HTMLroutes

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/notes", function(req, res) {
  return res.sendFile(path.json(__dirname, "./db/notes.json"));
});

// Start the server on the port
app.listen(PORT, function() {
    console.log(`API server now on port ${PORT}!`);
});