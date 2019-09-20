import gql from "graphql-tag";

export const SUBSCRIPTION_MUTATION = gql`
  mutation sendPromoCoupon($email: String!, $message: String) {
    sendPromoCoupon(email: $email, message: $message) {
      success
    }
  }
`;
