import mongoose from "mongoose";

async function initDatabase() {
    const dbUrl = `mongodb://localhost:27017`;
    const dbName = 'cosmic-explorer';

    await mongoose.connect(dbUrl, { dbName });
 
}

export default initDatabase;