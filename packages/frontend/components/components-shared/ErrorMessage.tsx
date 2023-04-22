import styled from '@emotion/styled';

export const ErrorMessage = styled.p`
  color: var(--error-color);
  margin: 0.5rem 0;
  width: 100%;
  ::before {
    content: '❌ ';
    padding-right: 1rem;
  }
`;
