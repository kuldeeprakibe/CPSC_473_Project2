
var mongoose = require('mongoose');

var User = mongoose.model('User',{
	id: String,
	username: String,
	password: String,
	email: String,
	firstName: String,
	lastName: String
});

var Question = mongoose.model('Question',{
    id: String,
	category: String,
    questionsData:[ {
        id: Number,
        questions:String,
        qoptions: [String],
        answer: String
    } ,
    {
        id: Number,
        questions:String,
        qoptions: [String],
        answer: String
    },
    {
        id: Number,
        questions:String,
        qoptions: [String],
        answer: String
    },
    {
        id: Number,
        questions:String,
        qoptions: [String],
        answer: String
    } 
    ]	
});

module.exports = {
    User: User,
    Question: Question,
};

console.log("going into user.js");
var Quiz= mongoose.model('Quiz',{
    username: String,
    category: String,
    questionsData:[ 
        contents
    ]	

});
var contents=new mongoose.Schema({
		id: Number,
        questions:String,
        choices: [String],
        answer: String
    });


module.exports={
	User: User,
	Quiz: Quiz
};

