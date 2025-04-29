// src/components/MainContent.jsx
// src/main.jsx
import React from 'react';
import Skills       from './Skills';
import Contact      from './Contact';
import Projects     from './Projects';
import GitHubStats  from './GitHubStats';

export default function MainContent() {
  return (
    <main>
      <section className="intro">
        <p>
          I am David Garbacz, Professional Sportsman, Web Developer and
          Marketing Specialist
        </p>
      </section>

      <div className="grid">
        <Skills />
        <Contact />
      </div>

      <Projects />
      <GitHubStats />
    </main>
  );
}
