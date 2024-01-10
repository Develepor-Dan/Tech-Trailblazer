const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Comment', // Optional: Explicitly set the model name
    timestamps: true, // Optional: Include timestamps (createdAt and updatedAt) by default
    underscored: true, // Optional: Use underscored naming for attributes (e.g., created_at)
  }
);

module.exports = Comment;
