const express = require("express");
const cors = require("cors");
const userController = require("./controllers/user.controllers");
const noteController = require("./controllers/note.controllers");

require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userController);
app.use("/api", noteController);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
