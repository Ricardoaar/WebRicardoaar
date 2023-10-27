import { gql } from "@apollo/client";

export const GET_EXPERIENCES = gql`
    query GetExperiences {
        experiences {
            _id
            title
        }
    }
`;