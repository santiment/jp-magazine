import gql from "graphql-tag";

export const SUBSCRIPTION_MUTATION = gql`
  mutation sendPromoCoupon($email: String!, $message: String, $lang: PromoEmailLangEnum) {
    sendPromoCoupon(email: $email, message: $message, lang: $lang) {
      success
    }
  }
`;
