    import express from "express";
    import cors from "cors";
    import {db} from "./db.js";

    const app=express();
    app.use(cors());
    app.use(express.json());

    app.get("/",(req,res)=>{

        const q="select * from categories";

        db.query(q,(err,data)=>{
            if(err)return res.status(500).json(err);
            res.json(data);
    });
    });

    app.listen(5000,()=>{
           console.log("Connected to backend!");
    });