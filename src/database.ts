import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect("mongodb://db:27017/mongodbgraphql", {
            useNewUrlParser: true
        });

        console.log(">>> DB connected");
    } catch(e) {
        throw Error(e);
    }
};