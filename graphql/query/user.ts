// import { graphql } from "../../gql";

import { graphql } from "@/gql";

export const verifyUserGoogleTokenQuery = graphql(`
  #graphql
  query verifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrrentUserQuery = graphql(`
  #graphql
  query getCurrentUser {
    getCurrentUser {
      id
      email
      firstName
      lastName
      profileImageURL
      tweets {
        id
        content
        imageURL
        author {
          id
          firstName
          lastName
          profileImageURL
        }
      }
    }
  }
`);


export const getUserByIdQuery = graphql(`#graphql
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      firstName
      lastName
      profileImageURL
      tweets {
        id
        content
        imageURL
        author {
          id
          firstName
          lastName
          profileImageURL
        }
      }
    }
  }
`)