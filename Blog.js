const mongoose = require('./db');

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Blog = mongoose.model('Blog', projectSchema);

module.exports = Blog;