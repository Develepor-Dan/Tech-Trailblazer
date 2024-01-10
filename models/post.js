const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Example: Making the title a required field
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Post', // Explicitly define the model name
    timestamps: true, // Include timestamps (createdAt and updatedAt)
    underscored: true, // Use underscores in column names (e.g., created_at instead of createdAt)
  }
);

module.exports = Post;
