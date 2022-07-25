const mongoose = require ("mongoose")

async function connectToDatabase (){
    let uri='mongodb://localhost:27017/Atlas'
    try {
        await mongoose.connect(uri);
        console.log("coonection Successfull")
    } catch (error) {
        console.log("error in connecting to database")
        throw error
    }
}

module.exports =connectToDatabase;