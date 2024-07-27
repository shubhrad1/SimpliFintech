import { mergeResolvers } from "@graphql-tools/merge";
import userTypeDef from "./users.typeDef.js";
import transactionTypeDef from "./transactions.typeDef.js";

const mergedTypeDef=mergeResolvers(userTypeDef,transactionTypeDef);

export default mergedTypeDef;