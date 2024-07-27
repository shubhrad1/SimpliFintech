const transactionTypeDef=`#graphql

    type Transaction{
        _id: ID!
        userId: ID!
        transactiontype: STRING!
        transactionmethod: STRING!
        timestamp: DATE!
        amount: DECIMAL!
        description: STRING!
    }

    type Query{
        transaction: [Transaction]
        transaction(transactionId:ID!): Transaction
        transaction(userId:ID!): [Transaction]
    }
    type Mutation{
        createTransaction(input: createTransactionInput!): Transaction!
        updateTransaction(input: updateTransactionInput!): Transaction!
        deleteTransaction(transactionId:ID!): Transaction!
    }
    input insert_transaction{
        userId: ID!
        transactiontype: STRING!
        transactionmethod: STRING!
        timestamp: DATE!
        amount: DECIMAL!
        description: STRING!

    }
    input update_transactionInput{
        _id: ID!
        transactiontype: STRING
        transactionmethod: STRING
        timestamp: DATE
        amount: DECIMAL
        description: STRING
    }
`

export default transactionTypeDef;