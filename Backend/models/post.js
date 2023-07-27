'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image_URL: DataTypes.BLOB,
    UserId: DataTypes.INTEGER,
    ChatroomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
    tableName:'posts'
  });
  return Post;
};