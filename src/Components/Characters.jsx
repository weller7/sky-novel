import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";

const characters = [
  {
    name: "Jamie O'Riordan",
    image: "./src/assets/img/jamie.jfif",
    description:
      "A single father and factory worker, Jamie is a tough as nails man with a fiery temper. Originally from Belfast, he moved to Manchester at 16. Despite his rough exterior, Jamie is friendly, charming, and playful. He loves football, cars, banter and fixing stuff. His deep love for his daughter, Alex, drives him to make sacrifices, including working long hours and using cyberware despite his dislike for it to endure the shifts at work.",
  },
  {
    name: "Alex O'Riordan",
    image: "./src/assets/img/alex.jpg",
    description:
      "A spirited 8-year-old, Alex is the heart and joy of Jamie's life. In a gritty dystopia, she shines with resilience and optimism. A true tomboy, she mirrors her father's fiery spirit and love for soccer, often found kicking a ball or supporting Neu Manchester with her dad. Her cheeky, mischievous nature keeps Jamie on his toes. While not particularly interested in the arts, she enjoys drawing everything she sees. Her curiosity and courage make her both Jamie's pride and his anchor.",
  },
  {
    name: "Aurelius",
    image: "./src/assets/img/aurelius.jfif",
    description:
      "A former Blade Runner, a weathered replicant built for precision and endurance. Once tasked with hunting his own kind, he now roams New Manchester’s streets as a private investigator. He’s learned to navigate the city’s underworld with ease. Cynical yet methodical, Aurelius trusts few and lives in the grey areas, his calm demeanor masks a lifetime of violence and secrets, making him both a formidable ally and a dangerous enemy.",
  },
  {
    name: "Lukasz Novak",
    image: "./src/assets/img/lukasz.jpg",
    description:
      "Lukasz, is a visionary turned corporate tyrant, a man whose genius reshaped the world and whose ambition consumed it. Once a bright child with dreams of improving his community, he grew colder and ruthless as his wealth and power expanded. As economic and political crises unfolded, he exploited the chaos, amassing wealth, crushing competitors and corrupting governments to secure Leviathan’s dominance, transforming it into a global empire. He's a ruthless strategist, willing to sacrifice ethics for profit. His ambition knows no bounds, and Levi's dominance is a testament to his unrelenting drive for power.",
  },
];

const Characters = () => {
  const [currentCharacter, setCurrentCharacter] = useState(0);

  return (
    <section className=" py-6 px-6">
      <div>
        <h2 className="text-2xl text-center font-bold py-6">Characters</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={() =>
                setCurrentCharacter((prev) =>
                  prev === 0 ? characters.length - 1 : prev - 1
                )
              }
              className="absolute left-0 z-10 text-white hover:text-yellow-400 transition-colors"
              aria-label="Previous character"
            >
              <ChevronLeft size={40} />
            </button>
            <Card className="w-full max-w-4xl bg-[#0F172A] border-cyan-400">
              <CardContent className="p-3">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-3/4 h-90  bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-lg overflow-hidden mb-4 mr-6">
                    <img
                      src={characters[currentCharacter].image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center pr-3">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                      {characters[currentCharacter].name}
                    </h3>
                    <p className="text-cyan-300">
                      {...characters[currentCharacter].description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <button
              onClick={() =>
                setCurrentCharacter((prev) =>
                  prev === characters.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-0 z-0 text-white hover:text-yellow-400 transition-colors"
              aria-label="Next character"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
