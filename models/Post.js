const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
  },
  discription: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: true,
  },
});

PostSchema.post("save", async (doc, next) => {
  // when user add new post, we update his array of posts
  const olduser = await User.findById(doc.createdBy);
  await User.findByIdAndUpdate(
    { _id: doc.createdBy },
    { posts: [...olduser.posts, doc._id] }
  );
  next();
});
PostSchema.post("remove", async (doc, next) => {
  // when user delete post, we update his array of posts
  const olduser = await User.findById(doc.createdBy);
  NewPosts = olduser.posts.filter(function (item) {
    return item !== doc._id;
  });

  await User.findByIdAndUpdate({ _id: doc.createdBy }, { posts: NewPosts });
  next();
});
const Post = mongoose.model("post", PostSchema);

module.exports = Post;
