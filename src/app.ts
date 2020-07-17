import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import { connect } from "./database";

connect();

const port = 3000;

const app: express.Application = express();
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
    context: {
        messageId: "test",
    }
}));
app.get("/", (req, res) => {
    res.json({
        message: "Holi"
    });
});

app.listen(port, () => console.log("server on potato 3000."));