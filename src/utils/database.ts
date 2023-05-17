import mongoose from 'mongoose'


mongoose.Promise = Promise

export const connectToDb = async() => {
    let connection

    try { // vicci
        connection = await mongoose.connect(process.env.DB_URL, { autoIndex: false, })
        console.log('connected to db')
    } catch (e) {
        console.log('error connecting to db ', e)
    }

    return connection
}