"use client";
import { graphqlClient } from "@/clients/api";
import { GetCurrentUserQuery } from "@/gql/graphql";
import { getCurrentUserQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: () => graphqlClient.request(getCurrentUserQuery),
    // enabled: typeof window !== "undefined",
    // ssr: false,
  });

  return { ...query, user: query.data?.getCurrentUser };
};
