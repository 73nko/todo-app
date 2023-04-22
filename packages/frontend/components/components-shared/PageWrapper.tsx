import styled from '@emotion/styled';

export const PageWrapper = styled.main`
  font-family: 'MarkPro';

  --pale-grey: #f5f5f5;
  --main-color: #4a77e5;
  --main-text-color: #1f2a4b;

  --main-color-hover: #3a5fb5;
  --secondary-text-color: #a1a4ad;
  --error-color: #d8000c;
  --shadow-color: rgba(0, 0, 0, 0.1);

  margin: 0;
  padding: 0;
  max-width: 100vw;
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  line-height: 1rem;
  background-color: var(--pale-grey);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;
