import my from "mysql2";

export const db=my.createConnection({
    host:"localhost",
    user:"root",
    password:"Mysql@036",
    database:"inventory_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.connect((err)=>{
    if(err){
        console.error("Database connection failed:",err);
        process.exit(1);
    } else {
        console.log("Database connected successfully!");
    }
});