import Hero from "./Components/Hero";
import Description from "./Components/Description";
import Locations from "./Components/Locations";
import Characters from "./Components/Characters";
import Gallery from "./Components/Gallery";
import World from "./Components/World";
import Action from "./Components/Action";
import Footer from "./Components/Footer";
import Chat from "./Components/Chat";

function App() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold text-[#1E293B] bg-[#E6DA46] py-1">
        The new MBR graphic novel is out!
      </h1>
      <Hero />
      <Description />
      <Characters />
      <World />
      <Locations />
      <Chat />
      <Gallery />
      <Action />
      <Footer />
    </>
  );
}

export default App;
