
// include external libraries
import mongoose from 'mongoose'



const linkSchema = new mongoose.Schema({

    chainId: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },

    name: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },
    
    aka: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },
    
    universe: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },
    
    link: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },
    
    bio: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },

    avatar: {
        type: String,
        required: false,
    },

    bgAvatar: {
        type: String,
        required: false,
    },

    active: {
        type: Boolean,
        required: false,
        default: false,
    },

    addedOn: {
        type: Date,
        default: Date.now()
    },

}, {
    collation: { locale: 'en_US', strength: 2 }
})


const LinkModel = mongoose.model('Link', linkSchema)
export default LinkModel
