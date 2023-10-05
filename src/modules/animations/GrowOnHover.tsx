import React from "react";
import styled from "styled-components";

const GrowOnHoverDiv = styled.div`
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

interface GrowOnHoverProps {
  className?: string;
  children: React.ReactNode;
}

const GrowOnHover = ({ children, className }: GrowOnHoverProps) => {
  return (
    <GrowOnHoverDiv className={className}>
      {children}
    </GrowOnHoverDiv>
  );
};

export default GrowOnHover;