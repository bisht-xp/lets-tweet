"use client";
import { graphqlClient } from "@/clients/api";
import { GetCurrentUserQuery } from "@/gql/graphql";
import { getCurrrentUserQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: () => graphqlClient.request(getCurrrentUserQuery),
    // enabled: typeof window !== "undefined",
    // ssr: false,
  });

  return { ...query, user: query.data?.getCurrentUser };
};
