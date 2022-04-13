import React from 'react';

export default function Sort({ option, value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {option.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
