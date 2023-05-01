import { Suspense } from "react";
import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

export default function RepoPage({ params: { name } }) {
  return (
    <div className="bg-red-500 h-40 rounded-md">
      <Link className="p-2 rounded-md bg-blue-700" href="./code/repos">
        Back to Repos
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}
