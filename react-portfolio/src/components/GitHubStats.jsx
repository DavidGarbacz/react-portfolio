// src/components/GitHubStats.jsx
import React, { useEffect, useState } from 'react';

export default function GitHubStats() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/DavidGarbacz')
      .then(res => res.json())
      .then(json => setCount(json.public_repos))
      .catch(() => setCount('—'));
  }, []);

  return (
    <section id="github-stats">
      <h2>GitHub Stats</h2>
      <p>
        I have {count === null ? '…' : count} public repo
        {count === 1 ? '' : 's'} on GitHub.
      </p>
    </section>
  );
}
