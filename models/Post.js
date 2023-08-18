const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Post extends Model {}

Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
    },
    {
        sequelize
    }
)

module.exports=Post