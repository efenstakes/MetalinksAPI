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
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    async resolve(_context, { id }) {
        const result = await LinkModel.findById(id)

        return result
    }
}
