const express = require('express');
const cors = require('cors');

const app = express();
const port = 3002;


const todos = [
    {
        "id": 1,
        "title": "to do 1",
    },
    {
        "id": 2,
        "title": "to do 2",
    },
    {
        "id": 3,
        "title": "to do 3",
    },
    {
        "id": 4,
        "title": "to do 4",
    },
    {
        "id": 5,
        "title": "to do 5",
    },
    {
        "id": 6,
        "title": "to do 6",
    },
    {
        "id": 7,
        "title": "to do 7",
    },
    {
        "id": 8,
        "title": "to do 8",
    },
    {
        "id": 9,
        "title": "to do 9",
    },
    {
        "id": 10,
        "title": "to do 10",
    }
]


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/', (req, res) => {
    res.send(todos)
})


app.post('/', (req, res) => {
    todos.push(req.body)
    res.send({'status': 200})
})


app.delete('/:id', (req, res) => {
    const todoId = +req.params.id
    const todoIndex = todos.findIndex(todo => todoId === todo.id)

    todos.splice(todoIndex, 1)
    res.send({'status': 200})
})