import { GraphQLSchema, GraphQLObjectType, GraphQLString, } from 'graphql'
import { getAvatarDetails, isAvatarNameUsed } from './avatar/queries'
import { getLinkDetails } from './link/queries'



const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Root query',
    fields: ()=> ({

        // get avatar details
        getAvatarDetails,

        // check if a name is used
        isAvatarNameUsed,

        
        // get link details
        getLinkDetails,

    })
})


export default new GraphQLSchema({ query: rootQuery })
