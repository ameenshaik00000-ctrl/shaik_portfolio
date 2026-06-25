import React from 'react'

export default function SkillCard({ name }) {
    return (
      <div className="bg-slate-800 p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
        <h3 className="font-semibold text-lg">{name}</h3>
      </div>
    );
  }
