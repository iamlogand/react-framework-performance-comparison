import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  html_url: string;
}

interface UserRepositoriesProps {
  username: string;
}

const UserRepositoriesList: React.FC<UserRepositoriesProps> = ({ username }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          {
            params: {
              per_page: 100, // Increase this number to get more repositories per request (maximum is 100)
            },
          }
        );
        console.log(response);
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, [username, githubToken]);

  return (
    <div>
      <h2>{username}&apos;s Repositories</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRepositoriesList;
