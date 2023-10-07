import styled from "styled-components";

interface FadeInDivProps {
  duration?: number;
  delay?: number;
  className?: string;
}

export const FadeInDiv = styled.div<FadeInDivProps>`
  animation: fadeIn ${({ duration = 2 }) => duration}s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }

  }
`;