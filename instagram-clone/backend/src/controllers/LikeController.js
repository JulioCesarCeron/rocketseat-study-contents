const Post = require('../models/Post');
const mongoose = require('mongoose');

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();

    req.io.emit('like', post);

    return res.json(post);
  },

}