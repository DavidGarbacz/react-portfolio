// src/components/Footer.jsx
import React, { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }, []);

  return (
    <footer>
      <p>
        © <span id="footer-year"></span> The Jailbreaker Enterprise
      </p>
    </footer>
  );
}
