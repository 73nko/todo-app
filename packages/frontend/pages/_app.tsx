import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { wrapper } from '../store/store';
import Header from '../components/Header';
import styled from '@emotion/styled';

const PageHead = () => (
  <Head>
    <title>FoodStyles Technical Challenge</title>
  </Head>
);

const PageWrapper = styled.main`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }

  width: 100vw;
  height: 100vh;
  background-color: var(--pale-grey);
`;

function TodoApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <PageHead />
      <Provider store={store}>
        <PageWrapper>
          <Header />
          <Component {...props} />
        </PageWrapper>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(TodoApp);
