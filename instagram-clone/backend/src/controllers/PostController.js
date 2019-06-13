const Post = require('../models/Post');
const mongoose = require('mongoose');

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt');
    return res.json(posts);
  },

  async store(req, res) {
    const { author, place, description, hastags } = req.body;
    const { filename: image } = req.file;
    
    const post = await Post.create({
      author,
      place,
      hastags,
      image,
    })

    return res.json({ post });
  },

}