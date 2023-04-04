import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as styles from './UserRepositoriesTable.module.css';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

interface UserRepositoriesProps {
  username: string;
}

const UserRepositoriesTable: React.FC<UserRepositoriesProps> = ({ username }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          {
            params: {
              per_page: 100,
            },
          }
        );
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, [username, githubToken]);

  return (
    <div className={styles.userRepoTable}>
      <h2>{username}'s Repositories</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Forks</th>
            <th>Stars</th>
            <th>Language</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repo) => (
            <tr key={repo.id}>
              <td>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </td>
              <td>{repo.description}</td>
              <td>{repo.forks_count}</td>
              <td>{repo.stargazers_count}</td>
              <td>{repo.language}</td>
              <td>{new Date(repo.updated_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRepositoriesTable;
