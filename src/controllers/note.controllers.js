const express = require("express");
const Note = require("../models/note.models");
const authTokenVerification = require("../middlewares/auth");

const router = express.Router();

router.post("/add-notes", async (req, res) => {
  try {
    const { authorId, title, content } = req.body;

    const note = await Note.create({ authorId, title, content });
    return res.status(201).send(note);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/get-notes", authTokenVerification, async (req, res) => {
  try {
    const notes = await Note.find({authorId: req.user._id}).lean().exec();
    return res.status(200).send({user: req.user, notes});
  } catch (err) {
      return res.status(500).send(err);
  }
});

router.get("/get-notes/:id", authTokenVerification, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        return res.status(200).send(note);
    } catch (err) {
        return res.status(500).send(err);
    }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(!updatedNote) {
      return res.status(404).send("Note not found");
    }
    return res.status(201).send(updatedNote);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/remove/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) {
      return res.status(404).send("Note not found");
    }
    return res.status(200).send(deletedNote);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
