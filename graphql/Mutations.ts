import { gql } from '@apollo/client'

export const SIGNUP_MUTATION = gql`
mutation($Name: String!, $EmailOrPhone: String!, $Password: String!) {
    Signup(Name: $Name, EmailOrPhone: $EmailOrPhone, Password: $Password) {
      Name
    }
  }
`;

export const USER_PHONE_OR_EMAIL_CONFIRMATION = gql`
mutation($Name: String!, $EmailOrPhone: String!, $Password: String!) {
  UserPhoneOrEmailConfirmation(Name: $Name, EmailOrPhone: $EmailOrPhone, Password: $Password) {
    message
    success
    }
  }
`;
