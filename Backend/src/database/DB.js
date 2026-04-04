import mongoose from "mongoose";

const connectDB = async() => {
    try{
        await new mongoose.connect(process.env.MONGODB_URI)
    }catch(err){
        console.log(`Database error ${err}`)
    }
}


export default connectDB