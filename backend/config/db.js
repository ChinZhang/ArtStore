import mongoose from 'mongoose'
import '../models/usersModel.js'

const connectDB = async () => {
    try {
        //database Name
        const artstore='artstore';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${artstore}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB