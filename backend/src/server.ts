import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
import { sample_heroes, sample_users } from "./data";
import jwt from "jsonwebtoken";
import heroRouter from "./routers/hero.router";
import userRouter from "./routers/user.router";
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]

}));

app.use("/api/heroes", heroRouter);
app.use("/api/users", userRouter);


app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})