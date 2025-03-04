import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Card, CardContent } from "./ui/card";

const World = () => {
  const worldDetails = [
    {
      title: "The Leviathan of UK",
      content:
        "Leviathan, a corporation so vast and powerful it transcends the concept of a company. Founded in the early-21st century as a merger of tech conglomerates, Leviathan expanded into every facet of life—energy, security, cybernetics, media, and even governance. Its influence is omnipresent; its logo glows on the tallest skyscrapers, is etched into cyberware implants, and beats like a second heart in every citizen's life. Leviathan is more than a corporation it's an institution, almost an entity in its own right. People refer to it simply as Levi, as if it were a living, breathing force. It doesn’t just control the city; it is the city, its invisible hand felt in every transaction, every implant upgrade, and every whispered rumor.",
      image: "./src/assets/img/levi.jpg",
    },
    {
      title: "The rise of cyberware",
      content:
        "By 2070, cybernetic enhancements, or cyberware, are both a necessity and a fashion statement. The working class augment their bodies to survive grueling, unsafe jobs, while the elite flaunt custom chrome as symbols of wealth and status. Cyberoptics, subdermal systems, and neural link implants are common, but not all cyberware is equal. The rich enjoy top-tier implants provided by Leviathan subsidiaries, while the poor make do with black-market modifications, risking rejection syndrome or worse. They have made instant communication and increased capabilities the norm, but they’ve also blurred the line between reality and the corporate-controlled virtual worlds.",
      image: "./src/assets/img/cyberware.jpg",
    },
    {
      title: "Neu Cityzens",
      content:
        "The Neu Cityzens are more than just a football team. They represent the spirit of New Manchester, embodying the fusion of traditional sports with futuristic technology. Their matches at Nova Sky Arena are spectacular events, featuring holographic replays, a cyborg mascot from space, and gravity-defying plays. Matches are now arenas of augmented athleticism, with players using enhanced reflexes, and AI-assisted tactics to push the limits of human potential. Stadiums are colossal domes of light and sound, where holographic displays project the action to millions of fans across the city. For the citizens of New Manchester, they're more than a team, they're a symbol of hope in a bleak world for many, the love of the game transcends even Levi's shadow.",
      image: "./src/assets/img/novasky.jfif",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl text-center font-bold py-4">World</h2>
        <Tabs
          defaultValue={worldDetails[0].title
            .toLowerCase()
            .replace(/\s+/g, "-")}
        >
          <TabsList className="grid w-full grid-cols-3 bg-[#2FA4D8] rounded-lg py-1 my-2">
            {worldDetails.map((detail) => (
              <TabsTrigger
                key={detail.title}
                value={detail.title}
                className="text-white font-bold data-[state=active]:bg-cyan-600 rounded-lg"
              >
                {detail.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {worldDetails.map((detail) => (
            <TabsContent key={detail.title} value={detail.title}>
              <Card className="bg-[#0F172A] border-cyan-400">
                <CardContent className="mt-4">
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
                    <img
                      src={detail.image}
                      className="w-full md:1/3 h-auto rounded-lg shadow-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                        {detail.title}
                      </h3>
                      <p className="text-cyan-300">{detail.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default World;
