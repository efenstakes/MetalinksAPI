
// include external libraries
import mongoose from 'mongoose'



const avatarSchema = new mongoose.Schema({

    txHash: {
        type: String,
        unique: true,
        required: true,
    },
    
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

    addresses: {
        type: [String],
        required: false,
        default: [],
    },

    joinedOn: {
        type: Date,
        default: Date.now()
    },

}, {
    collation: { locale: 'en_US', strength: 2 }
})


const AvatarModel = mongoose.model('avatar', avatarSchema)
export default AvatarModel
