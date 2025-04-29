// src/components/Header.jsx
import React from 'react';

export default function Header({ onToggle, icon }) {
  return (
    <header>
      <nav>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="theme-switch">
        <span className="theme-switch-label">Light / Dark Mode:</span>
        <button
          id="theme-toggle"
          aria-label="Toggle theme"
          onClick={onToggle}
        >
          {icon}
        </button>
      </div>

      <h1>The Jailbreaker Enterprise Unlimited</h1>
      <p>
        Break out from Casual to Become Your Greatest Potential!<br />
        Who Defines Your Path?
      </p>

      <img
        src="/me.jpg"            // ← leading slash → fetches public/me.jpg
        alt="Photo of David Garbacz"
      />
    </header>
  );
}
