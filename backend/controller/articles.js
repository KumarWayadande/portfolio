import { db } from "../db/db.js";


export async function getAll(){
    try{
        const query = "SELECT * FROM articles";
        const [results, fields] = await db.query(query);
        console.log(results, fields);
        return results;
    }
    catch(err){
        throw new Error(err);
    }   
}