import mongoose from "mongoose";

async function initDatabase() {
    const dbUrl = `mongodb://localhost:27017`;
    const dbName = 'cosmic-explorer';

    try {
        await mongoose.connect(dbUrl, { dbName });
        console.log('DB Connected Successfully');
        
    } catch (err) {
        console.log('DB Connection Failed');
        console.log(err.message);
    }
}

export default initDatabase;