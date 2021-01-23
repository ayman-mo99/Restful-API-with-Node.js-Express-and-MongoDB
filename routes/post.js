const express = require("express");
const router = express.Router();
const postController = require("../Controllers/PostController");
const Token = require("../helpers/Tokens");

// Read all posts
router.get("/", postController.allposts);

// Create new post
router.post("/add", Token.VarifyToken, postController.addpost);

// Update a post in the db
router.put("/edite/:id", Token.VarifyToken, postController.editpost);

// Delete a post from the db
router.delete("/delete/:id", Token.VarifyToken, postController.deletepost);

module.exports = router;
