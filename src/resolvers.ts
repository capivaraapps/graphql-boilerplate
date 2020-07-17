import User from "./models/User";

export const resolvers = {
    Query: {
        users() {
            return User.find();
        }
    },
    Mutation: {
        async createUser(root: any, args: any) {
            const newUser = new User (args.user);
            await newUser.save();
            return newUser;
        },
        deleteUser(root: any, args: any) {
            return User.findByIdAndDelete(args._id)
        },
        updateUser(root: any, args: any) {
            return User.findByIdAndUpdate(args._id, args.user, {new: true});
        }
    }
};