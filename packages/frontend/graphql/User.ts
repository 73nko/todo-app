import { gql } from '@apollo/client';

export const USER_GET = {
  name: 'user',
  gql: gql`
    query user {
      user {
        id
        username
        email
      }
    }
  `,
};

export const USER_LOGIN = {
  name: 'login',
  gql: gql`
    mutation login($loginInput: LoginInput!) {
      login(input: $loginInput) {
        jwt
      }
    }
  `,
};

export const USER_CREATE_ACCOUNT = {
  name: 'createAccount',
  gql: gql`
    mutation createAccount($createAccountInput: CreateAccountInput!) {
      createAccount(input: $createAccountInput) {
        jwt
      }
    }
  `,
};
