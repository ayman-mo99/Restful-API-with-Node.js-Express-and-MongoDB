const User = require("../models/User");
const Post = require("../models/Post");
const Token = require("../helpers/Tokens");

const login = async (req, res) => {
  try {
    const user = await User.login(req.body.email, req.body.password);

    const token = Token.CreateToken(user);
    res.header("auth-token", token);
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};

const register = async (req, res) => {
  try {
    const user = await User.register(req.body.email, req.body.password);
    // create a new user
    const save = await user.save();

    const token = Token.CreateToken(user);
    res.header("auth-token", token);
    res.json({ _id: save._id, email: save.email, posts: save.posts });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};

const UpdateUser = async (req, res) => {
  try {
    if (req.in_token._id == req.params.id) {
      const user = await User.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (user) {
        return res.send(user);
      } else {
        return res.send("no user");
      }
    }
    return res.send("you cannot update the user , Wrong token");
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const DeleteUser = async (req, res) => {
  try {
    if (req.in_token._id == req.params.id) {
      const user = await User.findByIdAndRemove({ _id: req.params.id }).select(
        "-password"
      );
      if (user) {
        await Post.deleteMany({ _id: { $in: user.posts } });
        return res.send(user);
      } else {
        return res.send("no user");
      }
    }
    return res.send("you cannot delete the user , Wrong token");
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const myposts = async (req, res) => {
  try {
    const userposts = await User.findById({ _id: req.params.id }).populate(
      "posts"
    );
    res.json(userposts);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  myposts,
  login,
  register,
  UpdateUser,
  DeleteUser,
};
