import Head from 'next/head';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { SessionProvider } from '../context/SessionContext';
import { useApollo } from '../graphql/apolloClient';

import Header from '../components/Header';
import { PageWrapper } from '../components/components-shared';

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
        <SessionProvider client={client}>
          <PageWrapper>
            <Header />
            <div className="container">
              <Component {...pageProps} />
            </div>
          </PageWrapper>
        </SessionProvider>
      </ApolloProvider>
    </>
  );
}

export default TodoApp;
