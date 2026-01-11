
import Link from "next/link";

interface AdventureCardProps {
  image: string;
  title: string;

}

const AdventureCard = ({ image, title }: AdventureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-6">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-adventure/20 shadow-adventure transition-all duration-300 group-hover:border-adventure group-hover:scale-105">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 max-w-[200px] leading-relaxed">
      </p>
      {title === "Day Tours" ? (
        <Link
          href="/day-tours"
          className="px-8 py-4 bg-gradient-to-br from-emerald-700 to-emerald-800 text-black rounded-lg font-medium hover:bg-white transition-colors"
        >
          Explore
        </Link>
      ) : (
        <button className="px-8 py-4 bg-gradient-to-br from-emerald-700 to-emerald-800 text-black rounded-lg font-medium hover:bg-white transition-colors">
          Explore
        </button>
      )}
    </div>
  );
};

const AdventureSection = () => {
  const adventures = [
    {
      image: "/images/daytours.jpg",
      title: "Day Tours",

    },
    {
      image: "/images/roundtours.jpg",
      title: "Round Tours",

    },
    {
      image: "/images/activite.jpg",
      title: "Activities",

    },
    {
      image: "/images/service.jpg",
      title: "Services",

    }
  ];

  return (
    <section id="holidays" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-script text-xl md:text-2xl text-adventure mb-2 block">
            Take yourself
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Adventure Ideas
          </h2>
        </div>

        {/* Adventure Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {adventures.map((adventure, index) => (
            <AdventureCard
              key={index}
              image={adventure.image}
              title={adventure.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;
