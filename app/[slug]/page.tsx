import { notFound } from "next/navigation";

import { graphqlClient } from "@/clients/api";
import { getUserByIdQuery } from "@/graphql/query/user";
import { User } from "@/gql/graphql";
import { Suspense } from "react";
import UserProfileContent from "@/components/UserProfile/UserProfileContent";

async function getUserData(id: string) {
  if (!id) return null;

  try {
    const userInfo = await graphqlClient.request(getUserByIdQuery, { id });

    if (!userInfo?.getUserById) {
      throw new Error("User not found");
    }

    return userInfo.getUserById as User;
  } catch (error) {
    throw error;
  }
}

async function UserProfilePage({ params }: { params: { slug: string } }) {
  const id = params.slug;

  if (!id) {
    notFound();
  }

  const userInfo = await getUserData(id);

  if (!userInfo) {
    notFound();
  }

  return (
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfileContent userInfo={userInfo} />
      </Suspense>
  );
}

export default UserProfilePage;
