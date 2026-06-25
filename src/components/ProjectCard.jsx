import React from 'react'

export default function ProjectCard({
    title,
    description,
    tech,
  }) {
    return (
      <div className="bg-slate-800 p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          {title}
        </h3>
  
        <p className="text-slate-300 mb-4">
          {description}
        </p>
  
        <div className="flex gap-2 flex-wrap">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-slate-700 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }
