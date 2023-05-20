import mongoose from 'mongoose'


mongoose.Promise = Promise

mongoose.connection.on('connection', (_)=> {
    console.log('connected to db')
})

mongoose.connection.on('error', (_)=> {
    console.log('connected to db')
})

export const connectToDb = async() => {
    try {
        await mongoose.connect(process.env.DB_URL, { autoIndex: false, })
        console.log('connected to db')
    } catch (e) {
        console.log('error connecting to db ', e)
    }
}