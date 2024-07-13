"use client";
import FeedCard from "@/components/FeedCard";
import HomePage from "@/components/HomePage/HomePage";
import { Tweet } from "@/gql/graphql";
import { useCreateTweets, useGetAllTweets } from "@/hooks/tweet";
import { useCurrentUser } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React, { Suspense, useCallback, useState } from "react";
import { BiImageAlt } from "react-icons/bi";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
}
