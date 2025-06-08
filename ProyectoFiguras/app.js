import express from 'express';
import {join,resolve} from 'path';       
import appRouter from "./routers/router.js";
const app=express();
const port=3000;
app.use("/",appRouter);
app.listen(port, ()=>{
    console.log('server running at http://localhost:${port}')
})