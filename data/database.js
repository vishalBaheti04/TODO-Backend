import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, { dbName: "backendapi" })
    .then(() => {
      console.log("Connected to the DataBase");
    })
    .catch((e) => {
      console.log(e);
    });
};
