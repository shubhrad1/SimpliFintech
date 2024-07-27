const userTypeDef=`#graphql

    type User{
        _id: ID!
        fname: STRING!
        lname: STRING
        email: STRING!
        uname: STRING!
        password: STRING!
        balance: DECIMAL
        createdAt: DATE!
        updatedAt: DATE!

    }

    type Query{
        users: [User!]
        # authuser: User
        user(userId:ID!): User
    }
    type Mutation{
        insert_user(input: signUpInput!): User
        login(input: loginInput!): User
        logout: LogoutResponse
    }
    input signUpInput{
        fname: String!
        lname: String!
        email: String!
        uname: String!
        password: String!

    }
    input loginInput{
        uname: String!
        password: String!
    } 
    type LogoutResponse{
        message: String!
    }
`

export default userTypeDef;