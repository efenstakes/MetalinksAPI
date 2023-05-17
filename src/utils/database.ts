import mongoose from 'mongoose'


mongoose.Promise = Promise

export const connectToDb = async() => {
    let connection

    try { // vicci
        connection = await mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/metalinks', { autoIndex: false, })
        console.log('connected to db')
    } catch (e) {
        console.log('error connecting to db ', e)
    }

    return connection
}