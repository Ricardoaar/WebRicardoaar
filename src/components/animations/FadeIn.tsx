import styled from "styled-components";
import { ReactAppContextType, useAppContext } from "@/app/ReactAppContext";
import { forwardRef } from "react";

interface FadeInDivProps {
  duration?: number;
  delay?: number;
  className?: string;
  appContext: ReactAppContextType;
}

const withAppContext = (Component: React.FC) => {
  return forwardRef((props: any, ref) => {
    const appContext = useAppContext();
    return <Component appContext={appContext} {...props} ref={ref} />;
  });
};


export const FadeInDiv = withAppContext(styled.div<FadeInDivProps>`
    animation: fadeIn ${({ duration = 2, appContext }: FadeInDivProps) => {
        if (appContext.areAnimationsEnabled) {
            return duration;
        }
        return 0;
    }}s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }

    }
`);