import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/sunnybhandal/${name}`,
    {
      next: { revalidate: 60 },
    }
  );

  const repo = await response.json();
  return repo;
}
export default async function Repo({ name }) {
  const repo = await fetchRepo(name);
  return (
    <div>
      <h2 className="">{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="flex">
        <div>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div>
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </div>
  );
}
