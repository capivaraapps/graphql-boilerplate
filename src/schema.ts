import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

export const typeDefs = `

    type User {
        _id: ID
        firstName: String!,
        lastName: String!,
        age: Int
    }

    input UserDTO {
        firstName: String!,
        lastName: String!,
        age: Int
    }

    type Query {
        users: [User]
    }

    type Mutation {
        createUser(user: UserDTO!): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, user: UserDTO): User
    }
`;

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});