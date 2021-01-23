const Post = require("../models/Post");
const mongoose = require("mongoose");

const allposts = async (req, res) => {
  try {
    const data = await Post.find();
    res.json(data);
    console.log("Get all posts");
  } catch (err) {
    res.json({ message: err });
  }
};

const addpost = async (req, res) => {
  const post = new Post({
    name: req.body.name,
    path: req.body.path,
    discription: req.body.discription,
    createdBy: mongoose.Types.ObjectId(req.body.createdBy),
  });

  try {
    const save = await post.save();
    res.json(save);
  } catch (err) {
    res.send(err);
  }
};

const editpost = async (req, res) => {
  try {
    // find the post tht we want
    const OldPost = await Post.findById({ _id: req.params.id });
    // check if the user how want to edit the post is the same user how created it
    // id of createdBy  vs id in the token
    if (OldPost.createdBy == req.in_token._id) {
      const NewPost = await Post.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(200).json(NewPost);
    }
    res.send("This user cannot edit this post");
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
const deletepost = async (req, res) => {
  try {
    // find the post that we want
    const OldPost = await Post.findById({ _id: req.params.id });
    // check if the user who want to delete the post is the same user who created it
    // id of createdBy  vs id in the token
    if (OldPost.createdBy == req.in_token._id) {
      const post = await Post.findByIdAndRemove({ _id: req.params.id });
      res.status(200).json(post);
    }
    res.status(401).send("This user cannot delete this post");
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
module.exports = {
  allposts,
  addpost,
  editpost,
  deletepost,
};
