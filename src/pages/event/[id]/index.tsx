import { useRouter } from "next/router";
import React from "react";

export default function index() {
  const router = useRouter();
  return (
    <div>
      test123123123123123
      <div>
        <button
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
