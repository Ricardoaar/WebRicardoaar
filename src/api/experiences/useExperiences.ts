"use client";

import { useQuery } from "@apollo/client";
import { GET_EXPERIENCES } from "@/api/experiences/experiences.queries";

export const useExperiences = () => {
  const { data, loading, error } = useQuery(GET_EXPERIENCES);

  return {
    data,
    loading,
    error
  };
};