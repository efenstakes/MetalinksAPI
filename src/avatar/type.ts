import {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLFloat,
} from 'graphql'


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
        joinedOn: {
            type: GraphQLFloat,
        },
        
    })
})

export default AvatarType
