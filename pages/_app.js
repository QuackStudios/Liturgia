import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient"; // Adjust path if needed

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
