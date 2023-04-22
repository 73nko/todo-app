import styled from '@emotion/styled';

export const InputButton = styled.input`
  width: 100%;
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: var(--main-color-hover);
  }
`;
