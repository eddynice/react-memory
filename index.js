import express from "express";
//import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import PostRoute from './route/post.js';
//import userRoute from "./route/user";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/post', PostRoute);
//app.use('./user', userRoute);


const CONNECTED_URL = "mongodb://127.0.0.1:27017/memory";
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTED_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => app.listen(PORT, () => console.log(`server Runing  on ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);