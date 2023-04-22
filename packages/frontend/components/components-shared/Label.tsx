import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  position: relative;
  margin-bottom: 0.5rem;
  width: 100%;
  input:hover:not(:disabled):not(:focus) {
    border-bottom: 1px solid var(--main-text-color) !important;
  }

  input[value=''] {
    border-top: 1px solid var(--main-text-color) !important;
  }

  input:hover:invalid:not(:placeholder-shown):not(:focus) {
    border-bottom: 1px solid var(--error-color) !important;
  }

  input:focus {
    border-bottom: 1px solid var(--main-color);
    transition: all 0.2s;
  }

  input:invalid:not(:focus) {
    border-bottom: 1px solid var(--error-color);
  }

  input:placeholder-shown:not(:focus) {
    border-bottom: 1px solid var(--secondary-text-color);
  }

  input {
    width: 100%;
    font-size: inherit;
    padding: 16px 0 8px 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    background-color: initial;
    color: var(--main-text-color);
    caret-color: var(--main-color);
    border-bottom: 1px solid var(--secondary-text-color);
  }

  input {
    font-size: 14px;
    line-height: 1.15;
    margin: 0;
    outline: none;
  }

  input:placeholder-shown:not(:focus) + .label {
    font-size: 16px;
    top: 20px;
    color: var(--secondary-text-color);
  }

  .label {
    position: absolute;
    left: 0;
    top: 0;
    cursor: text;
    font-size: 12px;
    color: var(--secondary-text-color);
    transition: all 0.2s;
    pointer-events: none;
  }
  input:invalid ~ .label {
    color: var(--error-color);
  }

  input:focus ~ .label {
    color: var(--main-color);
  }

  input:invalid:not(:focus):not(:placeholder-shown) ~ .error {
    display: block;
  }

  .error {
    margin-top: 0.8rem;
    color: var(--error-color);
    display: none;
  }

  input:invalid:not(:focus):not(:placeholder-shown) ~ .helper {
    display: none;
  }
`;
