import { GraphQLString, GraphQLNonNull, } from 'graphql'


// models
import LinkModel from './model'

// types
import LinkType from './type'



// get profile
export const getLinkDetails = {
    type: LinkType,
    args: {
        id: {
            type: GraphQLString,
        },
        chainId: {
            type: GraphQLString,
        },
    },
    async resolve(_context, { id, chainId }) {
        let result

        if(id) {
            result = await LinkModel.findById(id)
        }
        
        if(chainId) {
            result = await LinkModel.findOne({ chainId }).lean()
        }

        return result
    }
}
