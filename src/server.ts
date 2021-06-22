import "reflect-metadata";
import express, { response } from "express";
import { router } from "./routers";

import "./database";
//@types/express -D
const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is Running"))