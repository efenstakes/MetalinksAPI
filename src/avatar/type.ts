import {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLList,
} from 'graphql'
import LinkModel from '../link/model'


// import models here

// types


const AvatarType = new GraphQLObjectType({
    name: 'AvatarType',
    description: 'Avatar Type',
    fields: ()=> ({
        _id: {
            type: GraphQLID
        },
        txHash: {
            type: GraphQLString
        },
        chainId: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        aka: {
            type: GraphQLString
        },
        bio: {
            type: GraphQLString
        },
        avatar: {
            type: GraphQLString,
        },
        bgAvatar: {
            type: GraphQLString,
        },
        addresses: {
            type: new GraphQLList(GraphQLString)
        },
        joinedOn: {
            type: GraphQLFloat,
        },

        links: {
            type: new GraphQLList(require('../link/type')),
            async resolve({ _id }, _args) {
                return LinkModel.find({ avatarId: _id }).lean()
            }
        },
        
    })
})

export default AvatarType
