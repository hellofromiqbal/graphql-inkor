import User from "../models/User.js";

const resolvers = {
  Query: {
    users: async () => await User.find(),
    authService: async (_, args) => await User.findOne({ email: args.email }),
    userService: async (_, args) => await User.findOne({ email: args.email }),
    postService: async (_, args) => await User.findOne({ memberNo: args.memberNo })
  },
};

export default resolvers;