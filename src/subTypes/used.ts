import { GraphQLObjectType, GraphQLBoolean, } from 'graphql'



const UsedType = new GraphQLObjectType({
    name: 'UsedType',
    fields: ()=> ({
        used: {
            type: GraphQLBoolean,
        }
    })
})


export default UsedType
