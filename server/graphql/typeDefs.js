const typeDefs = `#graphql
  type User {
    memberNo: String!
    name: String!
    email: String!
    amount: Int!
    token: String!
    expired: Int!
  }
  type Query {
    users: [User]
    authService(email: String!): User
    userService(tokenId: String!, email: String!): User
    postService(memberNo: String!): User
  }
`;

export default typeDefs;