import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/sunnybhandal/repos",
    {
      next: { revalidate: 60 },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const repos = await response.json();
  return repos;
}
export default async function ReposPage() {
  const repos = await fetchRepos();
  return (
    <div className="">
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="border-2 border-rose-500 mb-4 rounded-md p-2 hover:bg-slate-300"
          >
            <Link href={`/code/repos/${repo.name}`}>
              <h3 className="text-semibold pb-2">{repo.name}</h3>
              <p className="text-sm pb-1">{repo.description}</p>
              <div className="flex space-x-2">
                <span>
                  <FaStar /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
