// src/components/Projects.jsx
import React, { useState } from 'react';

const allProjects = [
  { title: 'Project One',   img: '/images/project1.jpg',   desc: 'Brief description.' },
  { title: 'Project Two',   img: '/images/project2.jpg',   desc: 'Brief description.' },
  { title: 'Project Three', img: '/images/project3.jpg', desc: 'Brief description.' },
];

export default function Projects() {
  // 1) your “query” state
  const [query, setQuery] = useState('');

  // 2) build a filtered list each render
  const filtered = allProjects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  // 3) render
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <input
        type="text"
        id="project-search"
        placeholder="Search projects…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: '0.5rem', margin: '1rem 0', width: '100%', maxWidth: '400px' }}
      />

      <div className="projects-grid">
        {filtered.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
        {filtered.length === 0 && <p>No projects match “{query}.”</p>}
      </div>
    </section>
  );
}
