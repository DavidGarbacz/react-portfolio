// src/components/Skills.jsx
import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';

const skillData = [
  { name: 'Python & scripting', pct: 90 },
  { name: 'Control flow',      pct: 85 },
  { name: 'File I/O',          pct: 80 },
  { name: 'Git & GitHub',      pct: 75 },
  { name: 'HTML5 & CSS3',      pct: 80 },
  { name: 'Responsive design', pct: 75 },
  { name: 'JS & DOM',          pct: 85 },
  { name: 'Fetch API',         pct: 70 },
]

export default function Skills() {
  const canvasRef      = useRef(null)
  const chartInstance  = useRef(null)

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')

    // If there’s an existing chart, destroy it first:
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // Create & store the new chart
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: skillData.map(s => s.name),
        datasets: [{
          label: '% Proficiency',
          data: skillData.map(s => s.pct),
          backgroundColor: skillData.map(() => 'var(--color-accent)'),
        }]
      },
      options: {
        indexAxis: 'y',
        scales: { x: { max: 100 } },
        plugins: { legend: { display: false } }
      }
    })

    // Clean up when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
        chartInstance.current = null
      }
    }
  }, [])

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skillData.map((s,i) => (
          <li key={i}>
            <span className="skill-name">{s.name}</span>
            <span className="skill-percentage">{s.pct}%</span>
          </li>
        ))}
      </ul>
      <canvas id="skills-chart" ref={canvasRef}></canvas>
    </section>
  )
}
