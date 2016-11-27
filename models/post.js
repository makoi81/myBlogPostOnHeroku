var Sequelize = require('sequelize');
var databaseURL = 'sqlite://db';
var sequelize = new Sequelize(databaseURL);
var Post = sequelize.define('Post', {
    //create title and content as strings,
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    dateTime:Sequelize.DATE
});
module.exports = Post;

