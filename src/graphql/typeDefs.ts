import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Listing {
    id: ID!
    property: String!
    latitude: Float!
    longitude: Float!
    city: String
    country: String
    monthly_rate: Int!
    lease_term_months: Int!
    total_views: Int!
  }

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
  }
`;
