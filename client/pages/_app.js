import '../styles/globals.css';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  // Handler graphql errors
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, location, path }) => {
      console.log({ message, location, path });
      console.log('custom gqlError');
    });
  }

  // Handler network error
  if (networkError) {
    console.log(networkError);
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:3030/graphql' }),
]);

// Configure Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
