const Sequelize = require('sequelize');
const { Op } = require('sequelize');

const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Define associations with foreign keys and cascade options
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Export models
module.exports = {
  User,
  Comment,
  Post
};
