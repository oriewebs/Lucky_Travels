/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { dayTours } from "../data/dayTours";

export default function DayToursPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Day Tours</h1>
      <p className="text-muted-foreground mb-8">Choose a day tour type to see what's included.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dayTours.map((tour) => (
          <div key={tour.slug} className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{tour.title}</h2>
            {tour.description && <p className="text-sm mb-4">{tour.description}</p>}
            <Link
              href={`/day-tours/${tour.slug}`}
              className="inline-block px-4 py-2 bg-emerald-700 text-black rounded-md font-medium"
            >
              View details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
