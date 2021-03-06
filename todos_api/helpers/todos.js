var db = require("../models");
exports.getTodos = function(req,res){
	db.Todo.find()
	.then(function(todos){
		res.json(todos);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.createTodo = function(req,res){
	db.Todo.create(req.body)
	.then(function(newTodo){
		res.json(newTodo);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.getTodo = function(req,res){
	db.Todo.findById(req.params.todoId)
	.then(function(newTodo){
		res.json(newTodo);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.updateTodo = function(req,res){
	db.Todo.findOneAndUpdate({_id: rq.params.todoId},req.body,{new: true})
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.deleteTodo = function(req,res){
	db.Todo.remove({_id: rq.params.todoId})
	.then(function(todo){
		res.json({message:"we deleted it!!"});
	})
	.catch(function(err){
		res.send(err);
	})
}


module.exports = exports;