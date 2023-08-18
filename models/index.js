const User = require("./User")
const Post = require("./Post")
const Comment = require("./Comment")

Post.belongsTo(User, {
    foreignKey: "userId", //foreign key on post table that references user id in users table (1 to 1)
})

Post.hasMany(Comment, {
    onDelete: "CASCADE", //if a comment is deleted from the database it will also delete its associated posts
    foreignKey: "postId"
})

Comment.belongsTo(User, {
    foreignKey: "userId"
})

module.exports = {User, Post, Comment}
     