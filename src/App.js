import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repos, updateRepos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('/repositories');
 
      updateRepos(result.data);
    };
 
    fetchData();
  }, []);

  async function handleAddRepository() {
    const newRepo = {
      title: "title",
      url: "https://url.com",
      techs: []
    }
    
    const response = await api.post("/repositories", newRepo)
    
    updateRepos([...repos, response.data])
  }

  async function handleRemoveRepository(id) {
    api.delete(`/repositories/${id}`);
    
    updateRepos(repos.filter(repo => repo.id !== id))
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repos.map((repo, index) => (
          <li key={index}>
            {repo.title}
            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
