"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>An unexpected error occurred.</p>
      {/* <button onClick={reset}>Try again</button> */}
    </div>
  );
}
