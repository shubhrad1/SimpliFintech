//import { authenticate } from "passport";

const userResolver = {
    Query:{
        users:() =>{
            return users
        },
        user:(_, {id}) =>{
            return users.find(user => user.id === id)
        },
        
    },
    Mutation:{}
}

export default userResolver;