
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