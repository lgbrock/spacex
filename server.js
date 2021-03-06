const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');

const app = express();

// Where we are storing data to - might need to make false during production
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
