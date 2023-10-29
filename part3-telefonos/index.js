const express = require("express");
const morgan = require('morgan')
const app = express();

app.use(express.json());
app.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens.res(req, res, 'content-length'), '-',
        JSON.stringify(req.body), 
    ].join(' ')   
}))

let persons = [
    { 
        id: 1,
        name: "Arto Hellas", 
        number: "040-123456" 
    },
    { 
        id: 2,
        name: "Ada Lovelace", 
        number: "39-44-5323523" 
    },
    { 
        id: 3,
        name: "Dan Abramov", 
        number: "12-43-234345" 
    },
    { 
        id: 4,
        name: "Mary Poppendieck", 
        number: "39-23-6423122" 
    },
];

app.get("/info", (request, response) => {
    const date = new Date();
    const numPersons = persons.length
    response.send(
        `Phonebook has info for ${numPersons} people.<br> ${date}`   
    )
});

app.get("/api/persons", (request, response) => {
    response.json(persons)
});

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(400).end()
    }
});

const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(n => n.id))
        : 0
    return maxId + 1
}

app.post("/api/persons", (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: "name missing"
        })
    }
    if (!body.number) {
        return response.status(400).json({
            error: "phone number missing"
        })
    }
    if (persons.map(number => number.number).includes(body.number)) {
        return response.status(400).json({
            error: "the phone number already exists"
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)
    
    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Servei running on port ${PORT}`);
})

