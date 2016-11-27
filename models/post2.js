/*
var Sequelize = require('sequelize');
var databaseURL = 'sqlite:/db/dev.sqlite3';
var sequelize = new Sequelize(databaseURL);

var Post = function(sequelize){
    return sequelize.define('post', {
//create title and content as strings,
        title: Sequelize.STRING,
        content: Sequelize.STRING
       // "timestamp" DATETIME    
    });
};

module.exports = Post;

*/


var Sequelize = require('sequelize');

var databaseURL = 'sqlite://db/';

var sequelize = new Sequelize(databaseURL);

module.exports = {
    Post:function(sequelize){
        var Post = sequelize.define('Post', {
        //create title and content as strings,
        title: Sequelize.STRING,
        content: Sequelize.STRING
        // "timestamp" DATETIME
        });
        return Post;
    }
}
/*

function(sequelize){

    var Post = sequelize.define('Post', {
    //create title and content as strings,
    title: Sequelize.STRING,
    content: Sequelize.STRING
    // "timestamp" DATETIME
    });
    return Post;
};
*/
