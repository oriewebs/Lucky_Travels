"use client"
import React, { useState } from "react";

type ScheduleItem = {
  label?: string;
  title: string;
  items: string[];
};

export default function DayScheduleTabs({ schedule }: { schedule: ScheduleItem[] }) {
  const [index, setIndex] = useState(0);

  if (!schedule || schedule.length === 0) return null;

  return (
    <div>
      <div className="flex gap-3 mb-4">
        {schedule.map((s, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`px-4 py-2 rounded-md font-medium ${i === index ? 'bg-emerald-800 text-white' : 'bg-emerald-700 text-black'}`}
          >
            {s.label ?? `Day ${String(i + 1).padStart(2,'0')}`}
          </button>
        ))}
      </div>

      <div className="p-4 border rounded-lg bg-white">
        <h3 className="font-semibold mb-2">{schedule[index].title}</h3>
        <ul className="list-disc pl-6">
          {schedule[index].items.map((it, ii) => (
            <li key={ii} className="mb-1">{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
