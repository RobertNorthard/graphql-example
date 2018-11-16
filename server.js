
const express = require('express');
const expresGraphQl = require('express-graphql');
const {buildSchema} = require('graphql');

const data = [
  {
    'id': 0,
    'name': 'Example blog post'
  }
];

const schema = buildSchema(`
    type Query {
        blog(id: Int): Message
    },
    type Message {
        id: String,
        name: String
    }
`);

const root = {
  blog: (args) => data[args.id],
};

const app = express();

app.use('/graphql', expresGraphQl({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000,
    () =>
      console.log('Started on localhost:4000/graphql'));
