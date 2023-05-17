import { GraphQLString, GraphQLNonNull, } from 'graphql'


// models
import AvatarModel from './model'


// types
import UsedType from '../subTypes/used'
import AvatarType from './type'



// get profile
const getAvatarDetails = {
    type: AvatarType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    async resolve(_context, { id }) {
        const result = await AvatarModel.findById(id)

        return result
    }
}


// check if name is used
const isAvatarNameUsed = {
    type: UsedType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    async resolve(_context, { name }) {
        let used = true
        const accountResult = await AvatarModel.findOne({ name: name }).lean()

        // if record doesnt exist
        if( !accountResult ) { 
            used = false
        } 

        return { used }
    }
}


module.exports = {

    isAvatarNameUsed,

    getAvatarDetails,

}
