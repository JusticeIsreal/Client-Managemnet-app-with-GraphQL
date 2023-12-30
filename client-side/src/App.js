import AddClientModal from "./components/AddClientModal";
import Clients from "./components/Clients";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Projects from "./components/Projects";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// handle cache
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming.clients;
          },
        },
        projectss: {
          merge(existing, incoming) {
            return incoming.clients;
          },
        },
      },
    },
  },
});
const client = new ApolloClient({
  uri: "http://localhost:1234/graphql",
  cache,
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModal />
          <Projects />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
