const axios = require('axios');
const Todo = require('../models/todo');

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json({
            status: true,
            data: todos
        })
    } catch (error) {
        res.status(500).json({ message: err.message })
    }
}

const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        console.log(todo)
        if (!todo) {
            res.status(404).send({ status: false, message: "Todo not found" })
        }
        res.json({ status: true, data: todo })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addTodo = async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        completed: req.body.completed,
        userId: req.user.id
    });
    try {
        const newTodo = await todo.save();
        res.status(201).json({ status: true, data: newTodo })
    } catch (error) {
        res.status(500).json({ status: false, error: error.message })
    }
}

const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            res.status(404).json({
                status: false,
                message: "Todo not found"
            })
        }

        console.log("todo", todo);
        console.log("req.user", req.user)
        if (todo.userId.toString() !== req.user.id) {
            console.log("True...", req.user.id, todo.userId.toString())
            return res.status(403).json({
                status: false,
                message: "Unauthorized to update this todo",
            });
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title: req.body.title, completed: req.body.completed }
        );
        res.json({ status: true, data: updatedTodo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const todo = Todo.findById(req.params.id);
        if (!todo) {
            res.status(404).json({ status: false, message: "Todo not found" })
        }
        if (todo.userId !== req.user.id) {
            return res.status(403).json({ status: false, message: "Unauthorized to delete this todo" })
        }
        await Todo.findByIdAndDelete(req.params.id)
        res.json({ status: true, message: "Todo deleted" })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

const deleteAllTodos = async (req, res) => {
    try {
        await Todo.deleteMany();
        res.status(200).json({ status: true, message: "Deleted All Todos Data..." })
    } catch (error) {
        res.status(500).json({ status: false, error: error.message })
    }

}

module.exports = {
    getAllTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodos
}