export type DayTour = {
  slug: string;
  title: string;
  description?: string;
  includes: string[];
  schedule?: { label?: string; title: string; items: string[] }[];
};

export const dayTours: DayTour[] = [
  {
    slug: "Day1",
    title: "Day 01 pakege",
    description: "🌴 1-Day Sri Lanka Tour 🌴",
    includes: ["English-speaking guide", "Lunch", "Entrance fees", "Transport"],
    schedule: [
      {
        label: "Day 01",
        title: "Day 1 – Airport → Sigiriya",
        items: [
          "Dambulla Cave Temple",
          "Sigiriya Rock Fortress",
          "Pidurangala Rock",
          "Sigiriya Village Safari (USD 20 per person)",
          "Hotel Drop-off (Sigiriya)",
        ],
      },
      
    ],
  },
  {
    slug: "Day2",
    title: "Day 02 pakege",
    description: "🌴 2-Day Sri Lanka Tour 🌴",
    includes: ["Guide", "Snacks", "Hiking permit", "Transport"],
    schedule: [
      {
        label: "Day 02",
        title: "Day 02  Sigiriya → Kandy",
        items: [
          "After breakfast, depart from Sigiriya",
          "Visit Aluvihare Rock Temple – Matale",
          "Visit the ancient Nalanda Gedige",
          "Visit Muthumariamman Hindu Temple",
          "Visit Spice Garden (Free Lunch)",
          "Visit Gem Museum & Workshop",
          "Visit Silk & Batik Factory",
          "Visit Big Buddha Temple – Kandy",
          "Visit the Temple of the Sacred Tooth Relic",
          "Enjoy the Kandy Cultural Dance Show",
          "Overnight stay in Kandy",
        ],
      },
    ],
  },
  {
    slug: "Day3",
    title: "Day 03 pakege",
    description: "🌴 3-Day Sri Lanka Tour 🌴",
    includes: ["Boat ride", "Snorkeling gear", "Lunch", "Life jacket"],
    schedule: [
      {
        label: "Day 03",
        title: "Day 03 – Kandy → Ella → Yala",
        items: [
          "After breakfast, depart from Kandy",
          "Visit Tea Plantation & Tea Factory",
          "Visit Ramboda Waterfall",
          "Visit Seetha Amman Hindu Temple",
          "Continue the journey to Ella",
        "Hike Little Adam’s Peak (Punchi Sri Pada)",
        "Continue to Yala",
        "Evening Yala Safari (optional jeep tour)",
        "Overnight stay in Yala",
        ],
      },
    ],
  },
   {
    slug: "Day4",
    title: "Day 04 pakege",
    description: "🌴 4-Day Sri Lanka Tour 🌴",
    includes: ["Boat ride", "Snorkeling gear", "Lunch", "Life jacket"],
    schedule: [
      {
        label: "Day 01",
        title: " Arrival & Sigiriya",
        items: [
          "✈️ Arrival at Bandaranaike International Airport (Colombo)",
        "🚗 Transfer to Sigiriya",
            "🏯 Visit Sigiriya Rock Fortress",
        "🏛️ Visit Dambulla Cave Temple",
        "⛰️ Visit Pidurangala Rock",
        "🏨 Check-in at hotel",
        "🌅 Evening relax / free time", 
        "🛌 Overnight stay in Sigiriya",
        ],
      },
      {
        label: "Day 02",
        title: "Sigiriya → Kandya",
        items: [
          "🍽️ After breakfast, depart from Sigiriya",
            "🏯 Visit Aluvihare Rock Temple – Matale",
            "🏛️ Visit the ancient Nalanda Gedige",
            "🛕 Visit Muthumariamman Hindu Temple",
            "🌿 Visit Spice Garden (Free Lunch)",
            "💎 Visit Gem Museum & Workshop",
            "🧵 Visit Silk & Batik Factory",
            "🙏 Visit Big Buddha Temple – Kandy",
            "🕉️ Visit the Temple of the Sacred Tooth Relic",
            "💃 Enjoy the Kandy Cultural Dance Show",
            "🛌 Overnight stay in Kandy",
        ],
      },
      {
        label: "Day 03",
        title: "Kandy → Ella (via Little Adam’s Peak & Nine Arches Bridge)",
        items: [
          "🍽️ After breakfast, depart from Kandy",
        "🌱 Visit Tea Plantation & Tea Factory",
        "🌊 Visit Ramboda Waterfall",
        "🛕 Visit Seetha Amman Hindu Temple",
        "🏞️ Continue the journey to Ella",
        "⛰️ Hike Little Adam’s Peak (Punchi Sri Pada)",
        "🌉 Visit Nine Arches Bridge",
        "🛌 Overnight stay in Ella",
        ],
      },
       {
        label: "Day 04",
        title: " Ella → Mirissa / Galle → Airport",
        items: [
          "🍽️ After breakfast, check out from hotel in Ella / South Coast", 
          "🌴 Travel towards Mirissa / South Coast",
          "🌅 Optional Scenic Coastal Viewpoints stop",
            "🏰 Visit Galle Fort & Shopping",
        "✈️ Depart to Bandaranaike International Airport (Colombo)",
        "✅ Arrival at airport, end of tour",
        ],
      },
    ],
  },
];

export function getDayTourBySlug(slug: string) {
  const s = String(slug || "").toLowerCase();
  return dayTours.find((d) => String(d.slug || "").toLowerCase() === s);
}
