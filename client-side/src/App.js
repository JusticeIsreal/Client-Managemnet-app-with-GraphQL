import AddClientModal from "./components/AddClientModal";
import Clients from "./components/Clients";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

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
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
