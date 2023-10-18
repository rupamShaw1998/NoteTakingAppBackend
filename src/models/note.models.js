const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
