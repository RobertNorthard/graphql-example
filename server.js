
const express = require('express');
const expresGraphQl = require('express-graphql');
var { buildSchema } = require('graphql')

const data = [
    {
        'id': 0,
        'name': 'Example blog post'
    }
]

var schema = buildSchema(`
    type Query {
        blog(id: Int): Message
    },
    type Message {
        id: String,
        name: String
    }
`);

var root = {
    blog: args => data[args.id],
};

var app = express();

app.use('/graphql', expresGraphQl({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));