import Head from 'next/head';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { PageWrapper } from '../components/shared';
import Header from '../components/Header';
import { useApollo } from '../graphql/apolloClient';

import './styles.css';

const PageHead = () => (
  <Head>
    <title>FoodStyles Technical Challenge</title>
  </Head>
);

function TodoApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);
  return (
    <>
      <PageHead />
      <ApolloProvider client={client}>
        <PageWrapper>
          <Header />
          <div className="container">
            <Component {...pageProps} />
          </div>
        </PageWrapper>
      </ApolloProvider>
    </>
  );
}

export default TodoApp;
