/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDayTourBySlug } from "../../data/dayTours";
import { notFound } from "next/navigation";
import DayScheduleTabs from "./DayScheduleTabs";

type Props = {
  params: any;
};

export default async function DayTourDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const tour = getDayTourBySlug(resolvedParams.slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{tour?.title}</h1>
      {tour?.description && <p className="mb-6 text-muted-foreground">{tour.description}</p>}

      {/* Package details (schedule) */}
      {tour?.schedule && tour.schedule.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-8 mb-4">Package Details</h2>
          <DayScheduleTabs schedule={tour.schedule} />
        </div>
      )}

    </main>
  );
}
