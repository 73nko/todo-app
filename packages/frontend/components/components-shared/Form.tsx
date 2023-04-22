import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  p {
    font-size: 0.875rem; // 14px
    text-decoration: underline;
    a {
      color: var(--main-color);
      &:hover {
        color: var(--main-color);
      }
    }
  }
`;
