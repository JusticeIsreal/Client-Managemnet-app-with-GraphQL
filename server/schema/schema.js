
// mongoose models
const Project = require("../models/project");
const Client = require("../models/client");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

// client Typpe
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

// project Typpe
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // PROJECTS QUERY
    allProjects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    singleProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },

    // CLIENTS QUERY
    allClients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client;
      },
    },
    singleClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
