import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const locations = [
  {
    name: "Titanium Quay",
    image: "./src/assets/img/business.jpg",
    description:
      "A premier business district towers over the River Irwell with hundreds of skyscrapers piercing the smog-filled skies. It pulses with wealth and corporate power where Luxurious buildings house multinational offices, banks, and Leviathan’s elite subsidiaries. Its illuminated skyline reflects on the polluted waters, symbolizing the divide between the corporate elite and the struggling masses in the city’s depths.",
  },
  {
    name: "Iron Market",
    image: "./src/assets/img/ironmarket.jpg",
    description:
      "The backbone of New Manchester’s economy, a maze of factories, refineries, and warehouses. Most workers here are chromed with crude cyberwear to endure long shifts in hazardous conditions. Life is bleak but functional, with dingy apartments crammed into towering blocks. Black-market dealers thrive in the shadows, offering everything from cheap augmentations to stolen Levi tech.",
  },
  {
    name: "Trinity Lux",
    image: "./src/assets/img/trinity.jpg",
    description:
      "The heart of the city's nightlife, dazzles with thousands of neon signs, holographic projections, and deafening music. Clubs, entertainment, and VR dens cater to every vice imaginable, making it a haven for thrill-seekers and escapists. Levi’s grip is looser here, but gangs and fixers run the streets. Beneath the glitz, desperate performers and hustlers do whatever it takes to survive.",
  },
  {
    name: "Floating Gardens",
    image: "./src/assets/img/gardens.jpg",
    description:
      "An artificial park district built by Levi to showcase its 'commitment' to sustainability with suspended platforms of lush greenery, a stark contrast to the neon-lit urban sprawl below. Beneath its beauty lies corporate PR and some even say hidden laboratories.",
  },
  {
    name: "Slate District",
    image: "./src/assets/img/street2.jpg",
    description:
      "Once a thriving working-class neighborhood, now a decayed undercity ruled by gangs. Its buildings are riddled with graffiti and glowing tags marking gang territory. Illegal cyberware clinics and weapons dealers operate openly, catering to those the corporations have discarded.",
  },
  {
    name: "Spectra Drift",
    image: "./src/assets/img/tech.jpg",
    description:
      "The home of technological research and development, housing Leviathan’s labs and startups under its umbrella. While it appears forward-thinking, it's a breeding ground for unethical experiments and corporate espionage. Test subjects for cutting-edge cyberwear often come from poor backgrounds, lured by false promises.",
  },
];

const Locations = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  return (
    <section className="py-6">
      <div className=" px-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Locations
        </h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={() =>
                setCurrentLocation((prev) =>
                  prev === 0 ? locations.length - 1 : prev - 1
                )
              }
              className="absolute left-0 z-10 text-white hover:text-yellow-400 transition-colors"
              aria-label="Previous location"
            >
              <ChevronLeft size={40} />
            </button>
            <Card className="w-full max-w-4xl bg-[#0F172A] border-cyan-400 ">
              <CardContent className="p-6 ">
                <div className="w-full  h-65 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-lg overflow-hidden mb-4">
                  <img
                    src={locations[currentLocation].image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                  {locations[currentLocation].name}
                </h3>
                <p className="text-cyan-300">
                  {locations[currentLocation].description}
                </p>
              </CardContent>
            </Card>
            <button
              onClick={() =>
                setCurrentLocation((prev) =>
                  prev === locations.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-0 z-10 text-white hover:text-yellow-400 transitions-colors"
              aria-label="Next location"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
