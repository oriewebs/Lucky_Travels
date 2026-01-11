"use client"
import React, { useState } from "react";

type Tour = {
  slug: string;
  title: string;
  description?: string;
  includes: string[];
};

export default function DayScheduleClient({ tour }: { tour: Tour }) {
  const [selected, setSelected] = useState<string | null>(null);

  const renderContent = () => {
    if (selected === "day1") {
      return (
        <div className="mt-4 p-4 border rounded-lg bg-white">
          <h3 className="font-semibold mb-2">Day 1 – Airport → Sigiriya</h3>
          <ul className="list-disc pl-6">
            <li>Dambulla Cave Temple</li>
            <li>Sigiriya Rock Fortress</li>
            <li>Pidurangala Rock</li>
            <li>Sigiriya Village Safari (USD 20 per person)</li>
            <li>Hotel Drop-off (Sigiriya)</li>
          </ul>
        </div>
      );
    }

    if (selected === "day2") {
      return (
        <div className="mt-4 p-4 border rounded-lg bg-white">
          <h3 className="font-semibold mb-2">Day 02 – Sigiriya → Kandy</h3>
          <ul className="list-disc pl-6">
            <li>After breakfast, depart from Sigiriya</li>
            <li>Visit Aluvihare Rock Temple – Matale</li>
            <li>Visit the ancient Nalanda Gedige</li>
            <li>Visit Muthumariamman Hindu Temple</li>
            <li>Visit Spice Garden (Free Lunch)</li>
            <li>Visit Gem Museum &amp; Workshop</li>
            <li>Visit Silk &amp; Batik Factory</li>
            <li>Visit Big Buddha Temple – Kandy</li>
            <li>Visit the Temple of the Sacred Tooth Relic</li>
            <li>Enjoy the Kandy Cultural Dance Show</li>
            <li>Overnight stay in Kandy</li>
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <div className="flex gap-3">
        <button
          onClick={() => setSelected("day1")}
          className="px-4 py-2 bg-emerald-700 text-black rounded-md font-medium"
        >
          Day 01
        </button>

        <button
          onClick={() => setSelected("day2")}
          className="px-4 py-2 bg-emerald-700 text-black rounded-md font-medium"
        >
          Day 02
        </button>
      </div>

      {renderContent()}
    </div>
  );
}
