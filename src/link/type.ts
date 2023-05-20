import { GraphQLBoolean } from 'graphql'
import {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLFloat,
} from 'graphql'


// import models here

// types


const LinkType = new GraphQLObjectType({
    name: 'LinkType',
    description: 'Link Type',
    fields: ()=> ({
        _id: {
            type: GraphQLID
        },
        txHash: {
            type: GraphQLString
        },
        avatarId: {
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
        universe: {
            type: GraphQLString
        },
        link: {
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
        active: {
            type: GraphQLBoolean,
        },
        addedOn: {
            type: GraphQLFloat,
        },
        
    })
})

export default LinkType
