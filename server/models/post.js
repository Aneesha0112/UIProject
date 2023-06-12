
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: { type: String, unique: true, required: true},
  time: { type: Date, required: true},
  location: {type: String, required: true},
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
    }
})

const Post = mongoose.model('Post', postSchema);

async function createPost(user, content, time, location) {
  const now = new Date();
  const newPost = await Post.create({
    user: user,
    content: content,
    time: now.toISOString(),
    location: location
  });
  return newPost;
}

async function updatePost( id, content, user) {
  const post = await Post.findOne({ "_id": id });
  if(!post) throw Error("Post not found");
  const now = new Date();
  const data={
        content : content,
        time: now.toISOString(),
        user: user
    }
  const update = await Post.findByIdAndUpdate(id, data, { new: true });
  return update;
}

async function readPost(id, user) {
  const post = await Post.findOne({ "_id": id });
  if(!post) throw Error("Post not found");
  return post;
}

async function deletePost(id, user) {
  if(Post.user!=user) throw Error("User not eligible to delete post");
  const post = await Post.findOne({ "_id": id });
  if(!post) throw Error("Post not found");
  await Post.deleteOne({"_id": id});
};

module.exports = { 
  createPost, updatePost, readPost, deletePost 
};